/// <reference types="cypress" />

describe('template spec', () => {
    it('Subtraindo 6 - 3 = 3', () =>{
        cy.visit('http://localhost:5173/');
        
        cy.get('button[id="6"]').click();
        cy.get('button[id="-"]').click();
        cy.get('button[id="3"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '3');
    });

    it('Subtraindo 5 - 10 = -5', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="5"]').click();
        cy.get('button[id="-"]').click();
        cy.get('button[id="1"]').click();
        cy.get('button[id="0"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '-5');
    })

    it('Subtraindo -5 - 3 = -8 ', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="-"]').click();
        cy.get('button[id="5"]').click();
        cy.get('button[id="-"]').click();
        cy.get('button[id="3"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '-8');
    })
});