describe('Confirmation test', () => {
    it('подтверждение отклика от работодателя positive', () => {
        cy.fixture('employer').then(data => {
            cy.visit(data.main_url)

            cy.log('Ввод корректного логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.log('Клик на "Отклики"');
            cy.get(':nth-child(5) > .menu-item__item-name').click();

            cy.log('Клик на вкладку "На рассмотрении"');
            cy.get('.responses-page__tabs > .navigation-workspace > :nth-child(2) > .navigation-item__title').click();

            cy.log('Клик по зеленой кнопке, чтобы одобрить отклик');
            cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(1)').click();

            cy.log('Проверка, что отклик одобрен и можно перейти в рабочее пространство');
            cy.get('.infinite-loader > :nth-child(1) > .button').click();
        })
    })
})