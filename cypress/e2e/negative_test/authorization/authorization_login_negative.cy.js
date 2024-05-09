describe('Authorization test', () => {
    it('Авторизация с некорректным логином negative test', () => {
        cy.fixture('student').then(data => {

            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод некорректного логина')
            cy.get('.form-input--text').type(data.none_existent_login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span').should('exist')
        })
    })
})