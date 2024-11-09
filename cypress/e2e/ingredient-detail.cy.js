describe('Карточка с информацией об ингредиенте', () => {
  beforeEach(() => {
    cy.prepare();
  });

  it('открытие карточки ингредиента', () => {
    cy.get('[data-testid=ingredient_bun_1]').click();
    cy.get('[data-testid=modal_title]').should('text', 'Детали ингредиента');
    cy.get('[data-testid=ingredient_detail_name]').should('text', 'Булка 1');
  });

  it('закрытие карточки ингредиента кнопкой "Закрыть"', () => {
    cy.get('[data-testid=ingredient_bun_1]').click();
    cy.get('[data-testid=modal_close_button]').click();
    cy.get('[data-testid=modal_title]').should('not.exist');
  });

  it('закрытие карточки ингредиента нажатием на оверлей', () => {
    cy.get('[data-testid=ingredient_bun_1]').click();
    cy.get('[data-testid=modal_overlay]').click(0, 0);
    cy.get('[data-testid=modal_title]').should('not.exist');
  });

  it('закрытие карточки ингредиента кнопкой "Esc"', () => {
    cy.get('[data-testid=ingredient_bun_1]').click();
    cy.get('body').type('{esc}');
    cy.get('[data-testid=modal_title]').should('not.exist');
  });
});
