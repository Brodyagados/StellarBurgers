import { BASE_URL } from '../../src/utils/api-client';

describe('Перетаскивание ингредиента в конструктор', () => {
  beforeEach(() => {
    cy.prepare();
  });

  it('перетаскивание булки в конструктор в верхний элемент', () => {
    cy.get('[data-testid=ingredient_bun_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_bun_top]').trigger('drop');
    cy.get('[data-testid=ingredient_bun_1] .counter__num').should('have.text', '2');
    cy.get('.constructor-element__text').contains('Булка 1 (верх)');
    cy.get('.constructor-element__text').contains('Булка 1 (низ)');
  });

  it('перетаскивание булки в конструктор в нижний элемент', () => {
    cy.get('[data-testid=ingredient_bun_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_bun_bottom]').trigger('drop');
    cy.get('[data-testid=ingredient_bun_1] .counter__num').should('have.text', '2');
    cy.get('.constructor-element__text').contains('Булка 1 (верх)');
    cy.get('.constructor-element__text').contains('Булка 1 (низ)');
  });

  it('перетаскивание ингредиента в конструктор', () => {
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1] .counter__num').should('have.text', '1');
    cy.get('.constructor-element__text').contains('Ингредиент 1');
  });

  it('перетаскивание одного ингредиента в конструктор несколько раз', () => {
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1] .counter__num').should('have.text', '2');
    cy.get('.constructor-element__text').contains('Ингредиент 1');
  });

  it('создание заказа', () => {
    cy.intercept('POST', `${BASE_URL}/auth/login`).as('login');
    cy.intercept('POST', `${BASE_URL}/orders`, { fixture: 'created-order' }).as('createOrder');

    cy.visit('http://localhost:5173/#/login');
    cy.get('[name=email]').type('ogbu@test.ru');
    cy.get('[name=password]').type('ogbu123');
    cy.get('[type=submit]').contains('Войти').click();
    cy.wait('@login');

    cy.get('[data-testid=ingredient_bun_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_bun_top]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=constructor-total] [type=button]').click();
    cy.get('[data-testid=order_detail_number]').should('have.text', '12345');
    cy.get('[data-testid=modal_close_button]').click();
    cy.get('[data-testid=modal_title]').should('not.exist');
  });
});
