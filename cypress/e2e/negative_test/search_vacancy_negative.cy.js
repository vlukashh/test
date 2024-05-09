describe('Search test', () => {
    it('Просмотр вакансии с некорректным посиком', () => {
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
            cy.get('.form-input--text').type(data.wrong_name)


            cy.log('Клик по кнопке "поиск"')
            cy.get('div.search-input__field > .button').click()

            cy.log('Проверка провальной работы поиска');
            cy.get('.vacancy-list__failed-loading').should('exist')

        })
    })
})