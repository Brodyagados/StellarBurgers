describe('Перетаскивание ингредиента в конструктор', () => {
  beforeEach(() => {
    cy.prepare();
  });

  it('перетаскивание булки в конструктор в верхний элемент', () => {
    cy.get('[data-testid=ingredient_bun_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_bun_top]').trigger('drop');
    cy.get('[data-testid=ingredient_bun_1] .counter__num').should('text', '2');
    cy.get('.constructor-element__text').contains('Булка 1 (верх)');
    cy.get('.constructor-element__text').contains('Булка 1 (низ)');
  });

  it('перетаскивание булки в конструктор в нижний элемент', () => {
    cy.get('[data-testid=ingredient_bun_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_bun_bottom]').trigger('drop');
    cy.get('[data-testid=ingredient_bun_1] .counter__num').should('text', '2');
    cy.get('.constructor-element__text').contains('Булка 1 (верх)');
    cy.get('.constructor-element__text').contains('Булка 1 (низ)');
  });

  it('перетаскивание ингредиента в конструктор', () => {
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1] .counter__num').should('text', '1');
    cy.get('.constructor-element__text').contains('Ингредиент 1');
  });

  it('перетаскивание одного ингредиента в конструктор несколько раз', () => {
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1]').trigger('dragstart');
    cy.get('[data-testid=constructor_ingredient]').trigger('drop');
    cy.get('[data-testid=ingredient_ingredient_1] .counter__num').should('text', '2');
    cy.get('.constructor-element__text').contains('Ингредиент 1');
  });
});
