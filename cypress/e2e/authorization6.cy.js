describe('Авторизация на сайте по форме', function () {

    it('Авторизация с невалидной почтой и неправильным паролем', function () {
       cy.visit('https://login.qa.studio/');// Заходим на сайт ввода формы логина
       cy.get('#mail').type('GerMan@Dolnikov.ru');// В графе e-mail правильную почту с разными уровнями регистра
       cy.get('#pass').type('iLoveqastudio1');// В графе пароль пишем правильный пароль
       cy.get('#loginButton').click();// Кликаем на кнопку войти
       cy.get('#messageHeader').contains('Такого логина или пароля нет');// Сверяем текст такого логина или пароля нет

       })
})