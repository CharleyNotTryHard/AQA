describe('Авторизация на сайте по форме', function () {

    it('Восстановить пароль', function () {
        cy.visit('https://login.qa.studio/');// Заходим на сайт ввода формы логина
        cy.get('#forgotEmailButton').click();// Кликаем на вкладку забыли пароль
        cy.get('#forgotForm > .header').contains('Восстановите пароль');//Сверяем текст Восстановите пароль
        cy.get('#mailForgot').type('german@dolnikov.ru')// В поле e-mail вводим почту
        cy.get('#restoreEmailButton').click();// Нажимаем отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Сверяем текст Успешно отправили пароль на e-mail
       })
})