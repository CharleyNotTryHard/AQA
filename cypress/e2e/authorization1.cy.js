describe('Авторизация на сайте по форме', function () {

    it('Авторизация', function () {
       cy.visit('https://login.qa.studio/');// Заходим на сайт ввода формы логина
       cy.get('#mail').type('german@dolnikov.ru');// В графе e-mail пишем почту
       cy.get('#pass').type('iLoveqastudio1');// В графе пароль пишем пароль
       cy.get('#loginButton').click();// Кликаем на кнопку войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяем,что появился текст "Авторизация прошла успешно"
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверяем, что у пользователей виден крестик
       })
})