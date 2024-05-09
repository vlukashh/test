describe('Create vacancy test', () => {
    it('Создание вакансии positive test', () => {
        cy.fixture('employer').then(data => {
            cy.visit(data.main_url)

            cy.log('Ввод корректного логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.log('Клик на "Вакансии"');
            cy.get(':nth-child(7) > .menu-item__item-name').click();

            cy.log('Клик на кнопку "Создать вакансию"');
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

            cy.log('Ввод названия вакансии');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type(data.name, {force: true});

            cy.log('Клик на зараплатную плату "По диапазону"');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(1) > .radio-component__input').click({force: true});

            cy.log('Ввод зараплатной платы "от"');
            cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type(data.salary_from);

            cy.log('Ввод зараплатной платы "до"');
            cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type(data.salary_up_to);

            cy.log('Клик на тип занятости');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected').click();

            cy.log('клик на "Дистант"');
            cy.get('.form-select__items > :nth-child(2)').click();

            cy.log('Клик на график работы "2/2"');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > :nth-child(1) > .radio-list > :nth-child(2) > .radio-component__input ').click();

            cy.log('Ввод требований');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requirements);

            cy.log('Ввод обязанностей');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duties);

            cy.log('Клик на кнопку "Обновить вакансию"');
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({force: true});

            cy.log('Проверка созданной вакансии');
            cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-blue').click();
        })
    })
})