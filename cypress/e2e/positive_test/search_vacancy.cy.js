describe('Search test', () => {
    it('Просмотр вакансии с посиком positive', () => {
        cy.fixture('student').then(data => {
            cy.visit(data.main_url)

            cy.log('Ввод корректного логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.wait(1000)

            cy.log('Клик по кнопке для перехода на вакансии')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()

            cy.wait(1000)

            cy.log('Ввод названия вакансии');
            cy.get('.form-input--text').type(data.name)

            cy.log('Клик по кнопке "поиск"')
            cy.get('div.search-input__field > .button').click()

            cy.log('Клик на ваканчию нужным названием "Раб"');
            cy.get(':nth-child(2) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button').click()

        })
    })
})