describe('Авторизация на сайте по форме', function () {

    it('Авторизация с неправильной почтой и правильным паролем', function () {
       cy.visit('https://login.qa.studio/');// Заходим на сайт ввода формы логина
       cy.get('#mail').type('sobaka@yandex.ru');// В графе e-mail пишем неправильную почту
       cy.get('#pass').type('iLoveqastudio1');// В графе пароль пишем валидный пароль
       cy.get('#loginButton').click();// Кликаем на кнопку войти
       cy.get('#messageHeader').contains('Такого логина или пароля нет');// Сверяем текст сообщения такого логина или пароля нет
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяем, что крестик виден пользователям
       })
})