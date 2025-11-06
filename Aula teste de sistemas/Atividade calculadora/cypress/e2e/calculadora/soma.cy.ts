/// <reference types="cypress" />

describe('template spec', () => {
    it('Somando 2 + 4 = 6', () =>{
        cy.visit('http://localhost:5173/');
        
        cy.get('button[id="2"]').click();
        cy.get('button[id="plus"]').click();
        cy.get('button[id="4"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '6');
    });

    it('Somando -2 + -2 = -4', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="-"]').click();
        cy.get('button[id="2"]').click();
        cy.get('button[id="plus"]').click();
        cy.get('button[id="-"]').click();
        cy.get('button[id="2"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '-4');
    })

    it('Somando -4 + 6 = 2', () => {
        cy.visit('http://localhost:5173/');

        cy.get('button[id="-"]').click();
        cy.get('button[id="4"]').click();
        cy.get('button[id="plus"]').click();
        cy.get('button[id="6"]').click();
        cy.get('button[id="equal"]').click();
        cy.get('.display-container').should('have.text', '2');
    })
});