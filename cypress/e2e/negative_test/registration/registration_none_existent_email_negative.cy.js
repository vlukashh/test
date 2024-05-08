describe('Registration Test', () => {
    it('Тест с некорректным  email', () => {
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод корректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

            cy.log('Ввод некорректного email')
            cy.get('.form-input--email').type(data.none_existent_email)

            cy.log('Ввод корректного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()
            
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error')
            .should('exist')
        });
    });
});