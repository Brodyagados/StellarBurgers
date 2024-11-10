describe('Карточка с информацией об ингредиенте', () => {
  beforeEach(() => {
    cy.prepare();
  });

  it('открытие карточки ингредиента', () => {
    cy.getBun().click();
    cy.getModalTitle().should('have.text', 'Детали ингредиента');
    cy.get('[data-testid=ingredient_detail_name]').should('have.text', 'Булка 1');
  });

  it('закрытие карточки ингредиента кнопкой "Закрыть"', () => {
    cy.getBun().click();
    cy.get('[data-testid=modal_close_button]').click();
    cy.getModalTitle().should('not.exist');
  });

  it('закрытие карточки ингредиента нажатием на оверлей', () => {
    cy.getBun().click();
    cy.get('[data-testid=modal_overlay]').click(0, 0);
    cy.getModalTitle().should('not.exist');
  });

  it('закрытие карточки ингредиента кнопкой "Esc"', () => {
    cy.getBun().click();
    cy.get('body').type('{esc}');
    cy.getModalTitle().should('not.exist');
  });
});
