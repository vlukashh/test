describe('Registration test', () => {
    it('Регистрация positive test', () => {
        cy.fixture('registration').then(data => {
            cy.visit(data.main_url)
            cy.log('Ввод корректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

            cy.log('Ввод корректного email')
            cy.get('.form-input--email').type(data.email)

            cy.log('Ввод корректного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get(':nth-child(4) > .button').click()

            cy.log('Ввод корректной фамилия')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name)

            cy.log('Ввод корректного имя')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.surname)

            cy.log('Ввод корректного отчества ')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic)

            cy.log('Клик по кнопке создания аккаунта')
            cy.get(':nth-child(3) > .button').click()

            cy.log("Проверка что пользователь успешно зарегистрировался");
            cy.url().should('equal', 'https://dev.profteam.su/account/main');
        })
    })
})