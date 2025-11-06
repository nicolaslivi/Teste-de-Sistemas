/// <reference types="cypress" />

describe('template spec', () => {
    it('Dividindo 2 / 0 = Não é possível dividir por zero', () =>{
        cy.visit('http://localhost:5173/');
        
        cy.get('button[id="2"]').click();
        cy.get('button[id="/"]').click();
        cy.get('button[id="0"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', 'Não é possível dividir por zero');
    });

    it('Dividindo 5 / 5 = 1', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="5"]').click();
        cy.get('button[id="/"]').click();
        cy.get('button[id="5"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '1');
    })

    it('Dividindo 10 / 5 = 2', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="1"]').click();
        cy.get('button[id="0"]').click();
        cy.get('button[id="/"]').click();
        cy.get('button[id="5"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '2');
    })
});