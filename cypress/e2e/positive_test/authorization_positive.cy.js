
describe('Authorization test', () => {
    it('Авторизация positive test', () => {
        cy.fixture('student').then(data => {
            cy.visit(data.main_url)
            cy.log('Ввод корректного логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.log("Проверка что пользователь успешно зарегистрировался");
            cy.url().should('equal', 'https://dev.profteam.su/account/main');
        })
    })
})