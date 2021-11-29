/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-wait-until" />
context('Init test', () => {
  it('should show the homepage', () => {
    cy.visit('/')
  })
})
