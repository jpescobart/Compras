export class login {
    

    _InputUser = "//input[@id='user-name']";
    _InputPass="//input[@id='password']";
    _buttonLogin="//input[@id='login-button']";


    login(){
        cy.visit('/', { failOnStatusCode: false });
        cy.xpath(this._InputUser).type('standard_user');
        cy.xpath(this._InputPass).type('secret_sauce');
        cy.xpath(this._buttonLogin).click();
    }
   

}