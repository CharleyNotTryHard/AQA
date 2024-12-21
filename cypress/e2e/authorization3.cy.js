describe('Авторизация на сайте по форме', function () {

    it('Авторизация с неверной почтой и верным паролем', function () {
       cy.visit('https://login.qa.studio/');// Заходим на сайт ввода формы логина
       cy.get('#mail').type('german@dolnikov.ru ');// В графе e-mail пишем правильную почту
       cy.get('#pass').type('111');// В графе пароль пишем невалидный пароль
       cy.get('#loginButton').click();// Кликаем на кнопку войти
       cy.get('#messageHeader').contains('Такого логина или пароля нет');// Сверяем текст сообщения такого логина или пароля нет
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем, что крестик виден пользователям
       })
})