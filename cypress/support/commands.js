/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('prepare', () => {
  cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients' }).as('getIngredients');
  cy.visit('/');
  cy.wait('@getIngredients');
});

Cypress.Commands.add('authorize', () => {
  cy.visit('/login');
  cy.get('[name=email]').type('ogbu@test.ru');
  cy.get('[name=password]').type('ogbu123');
  cy.get('[type=submit]').contains('Войти').click();
  cy.wait('@login');
});

Cypress.Commands.add('getBun', () => {
  cy.get('[data-testid=ingredient_bun_1]');
});

Cypress.Commands.add('checkBunCounter', (count) => {
  cy.getBun().get('.counter__num').should('have.text', `${count}`); //так будет работать для "count: string | number"
});

Cypress.Commands.add('getIngredient', () => {
  cy.get('[data-testid=ingredient_ingredient_1]');
});

Cypress.Commands.add('checkIngredientCounter', (count) => {
  cy.getIngredient().get('.counter__num').should('have.text', `${count}`); //так будет работать для "count: string | number"
});

Cypress.Commands.add('getConstructorBunTop', () => {
  cy.get('[data-testid=constructor_bun_top]');
});

Cypress.Commands.add('getConstructorBunBottom', () => {
  cy.get('[data-testid=constructor_bun_bottom]');
});

Cypress.Commands.add('dragAndDropBun', (isTopConstructorItem = false) => {
  cy.getBun().trigger('dragstart');
  (isTopConstructorItem ? cy.getConstructorBunTop() : cy.getConstructorBunBottom()).trigger('drop');
});

Cypress.Commands.add('getConstructorIngredient', () => {
  cy.get('[data-testid=constructor_ingredient]');
});

Cypress.Commands.add('dragAndDropIngredient', () => {
  cy.getIngredient().trigger('dragstart');
  cy.getConstructorIngredient().trigger('drop');
});

Cypress.Commands.add('checkConstructorElementText', (text) => {
  cy.get('.constructor-element__text').contains(text);
});

Cypress.Commands.add('getModalTitle', () => {
  cy.get('[data-testid=modal_title]');
});
