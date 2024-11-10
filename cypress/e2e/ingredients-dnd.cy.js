describe('Перетаскивание ингредиента в конструктор', () => {
  beforeEach(() => {
    cy.prepare();
  });

  it('перетаскивание булки в конструктор в верхний элемент', () => {
    cy.dragAndDropBun(true);
    cy.checkBunCounter(2);
    cy.checkConstructorElementText('Булка 1 (верх)');
    cy.checkConstructorElementText('Булка 1 (низ)');
  });

  it('перетаскивание булки в конструктор в нижний элемент', () => {
    cy.dragAndDropBun();
    cy.checkBunCounter('2');
    cy.checkConstructorElementText('Булка 1 (верх)');
    cy.checkConstructorElementText('Булка 1 (низ)');
  });

  it('перетаскивание ингредиента в конструктор', () => {
    cy.dragAndDropIngredient();
    cy.checkIngredientCounter(1);
    cy.checkConstructorElementText('Ингредиент 1');
  });

  it('перетаскивание одного ингредиента в конструктор несколько раз', () => {
    cy.dragAndDropIngredient();
    cy.dragAndDropIngredient();
    cy.checkIngredientCounter('2');
    cy.checkConstructorElementText('Ингредиент 1');
  });

  it('создание заказа', () => {
    cy.intercept('POST', 'api/auth/login').as('login');
    cy.intercept('POST', 'api/orders', { fixture: 'created-order' }).as('createOrder');

    cy.authorize();

    cy.dragAndDropBun();
    cy.dragAndDropIngredient();
    cy.get('[data-testid=constructor-total] [type=button]').click();
    cy.get('[data-testid=order_detail_number]').should('have.text', '12345');
    cy.get('[data-testid=modal_close_button]').click();
    cy.get('[data-testid=modal_title]').should('not.exist');
  });
});
