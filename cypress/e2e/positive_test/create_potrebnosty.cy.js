describe('Create potrebnosty test', () => {
    it('Создание потребности positive test', () => {
        cy.fixture('employer').then(data => {
            cy.visit(data.main_url)

            cy.log('Ввод корректного логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод корректного пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(3) > .button').click();

            cy.log('Клик на "потребности"');
            cy.get(':nth-child(6) > .menu-item__item-name').click();

            cy.log('Клик на кнопку "создать потребность"');
            cy.get('.needs-block__filters-wrapper > .button').click();

            cy.log('Ввод названия  потребности');
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text').type(data.name, {force: true});

            cy.log('Клик на выбор заработной платы');
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(3) > .radio-component__input').click({force: true});

            cy.log('ввод суммы заработной платы');
            cy.get('.form-input--number').type(data.salary_from);

            cy.log('Ввод обязанностей');
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area').type(data.duties);

            cy.log('Ввод требований');
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area').type(data.requirements);

            cy.log('Клик на тип занятости');
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-select > :nth-child(2) > .form-select__selected').click();
            cy.get('.form-select__items > :nth-child(3)').click({force: true});

            cy.log('Клик на кнопку "Создать потрбность"');
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click({force: true});

            cy.log('Проверка созданной потребности');
            cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button__background-color-blue').click();

        })
    })
})