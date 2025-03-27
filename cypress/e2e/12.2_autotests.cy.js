describe('Проверка авторизации', function () {
    it('1. Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // найти "текст" об успешной авторизации и сравнить его с "текст" в документации
         cy.get('#messageHeader').should('be.visible'); // "текст" виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка "крестик" видна пользователю
     })
     it('2. Проверка кнопки "Забыли пароль"', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажал на кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели любую почту (для чистоты взял верную почту)
        cy.get('#restoreEmailButton').click(); // нажал на кнопку "отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // найти "текст" и сравнить его с "текст" в документации
        cy.get('#messageHeader').should('be.visible'); // "текст" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка "крестик" видна пользователю
    })
    it('3. Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio100'); // ввели НЕверный пароль
        cy.get('#loginButton').click(); // нажал на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // найти "текст" о НЕуспешной авторизации и сравнить его с "текст" в документации
        cy.get('#messageHeader').should('be.visible'); // "текст" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка "крестик" видна пользователю
    })  
    it('4. НЕерный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('g@dolnikov.ru'); // ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // найти "текст" о НЕуспешной авторизации и сравнить его с "текст" в документации
        cy.get('#messageHeader').should('be.visible'); // "текст" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка "крестик" видна пользователю
    })      
    it('5. Проверка валидации логина (что есть @)', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели неверный логин, без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // найти "текст" и сравнить его с "текст" в документации
        cy.get('#messageHeader').should('be.visible'); // "текст" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка "крестик" видна пользователю
    })
    it('6. Проверка на строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин, содержащий заглавные буквы
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // найти "текст" и сравнить его с "текст" в документации
        cy.get('#messageHeader').should('be.visible'); // "текст" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка "крестик" видна пользователю
    })
    
})