describe('Registration Test', () => {
    it('Регистрация с некорректным отчеством', () => {
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)
            
            cy.log('Ввод корректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

            cy.log('Ввод корректного email')
            cy.get('.form-input--email').type(data.email)

            cy.log('Ввод  корректного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Ввод  корректного повторяющего пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button').click()
            
            cy.log('Ввод корректной фамилия')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname)

            cy.log('Ввод корректного имя')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name)

            cy.log('Ввод некорректного отчества ')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.none_existent_patronymic)

            cy.log('Клик по кнопке создания аккаунта')
            cy.get(':nth-child(3) > .button').click()
            
            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get(':nth-child(1) > :nth-child(1) > .form-error').should('exist')
        });
    });
});