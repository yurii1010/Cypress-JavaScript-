describe('Покупка аватара', function () {
    it('1. Покупка нового аватара своему тренеру', function () {
        cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввел верную почту
        cy.get('#password').type('USER_PASSWORD'); // ввел верный пароль
        cy.get('.auth__button').click() // нажал на кнопку "войти"
        cy.wait(2000)
        cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
        cy.get('[href="/shop"]').click({ force: true }); // Клик на кнопку "смена аватара"
        cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996');                     // вводим номер карты
        cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
        cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
        cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456')                             // ввести код из смски
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.get('.payment__field-defolt-for-success').contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });

        