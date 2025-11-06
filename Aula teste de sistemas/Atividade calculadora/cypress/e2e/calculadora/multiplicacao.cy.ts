/// <reference types="cypress" />

describe('template spec', () => {
    it('Multiplicando 2 x 10 = 20', () =>{
        cy.visit('http://localhost:5173/');
        
        cy.get('button[id="2"]').click();
        cy.get('button[id="x"]').click();
        cy.get('button[id="1"]').click();
        cy.get('button[id="0"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '20');
    });

    it('Multiplicando -2 x 6 = -12', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="-"]').click();
        cy.get('button[id="2"]').click();
        cy.get('button[id="x"]').click();
        cy.get('button[id="6"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '-12');
    })

    it('Multiplicando 2 x 0 = 0', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="2"]').click();
        cy.get('button[id="x"]').click();
        cy.get('button[id="0"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '0');
    })
});