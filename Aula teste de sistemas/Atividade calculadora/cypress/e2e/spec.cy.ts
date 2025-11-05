/// <reference types="cypress" />

describe('template spec', () => {
  it('Teste 1 - Acessndo URL', () => {
    cy.visit('http://localhost:5173/');

    //cy.contains('nicolas');

    cy.get('button[id="2"]').click();
    cy.get('button[id="plus"]').click();
    cy.get('button[id="4"]').click();
    cy.get('button[id="equal"]').click();
  })
})

