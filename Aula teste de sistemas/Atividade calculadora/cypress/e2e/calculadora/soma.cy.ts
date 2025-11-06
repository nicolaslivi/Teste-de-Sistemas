/// <reference types="cypress" />

describe('template spec', () => {
    it('Somando 2 + 4 = 6', () =>{
        cy.visit('http://localhost:5173/')
        
        cy.get('button[id="2"]').click();
        cy.get('button[id="plus"]').click();
        cy.get('button[id="4"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '6');
    });
});