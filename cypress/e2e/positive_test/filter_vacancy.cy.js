describe('Filter test', () => {
    it('Просмотр вакансии с помощью сортировки positive', () => {
        cy.fixture('student').then(data => {
            cy.visit(data.main_url)

            cy.log('Ввод корректного логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.wait(2000)

            cy.log('Клик по кнопке для перехода на вакансии')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()

            cy.wait(2000)

            cy.log('Выбор фильтра для сортировки вакансий')
            cy.get(':nth-child(2) > .radio-component__input').click()

            cy.wait(200)

            cy.log('Выбор фильтра для сортировки вакансий')
            cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()
            cy.get('.form-select__items > :nth-child(3)').click()

        })
    })
})