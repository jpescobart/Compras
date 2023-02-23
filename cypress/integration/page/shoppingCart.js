export class shoppingCart {
   

    _optionShoppingCart1="//div[@id='shopping_cart_container']";
    _validateProduct1Selection="//div[text()='Sauce Labs Backpack']";
    _validateProduct2Selection="//div[text()='Sauce Labs Bike Light']";
    _buttonCheckout="//button[@id='checkout']";
    _optionfirstName="//input[@id='first-name']";
    _optionLastName="//input[@id='last-name']";
    _optionPostal="//input[@id='postal-code']";
    _buttonContinue="//input[@id='continue']";
    _buttonFinish="//button[@id='finish']";
    _optionFinish="//h2[text()='THANK YOU FOR YOUR ORDER']";

    
    validatshoppingCart(){
        cy.xpath(this._optionShoppingCart1).should('be.visible');;
        cy.xpath(this._optionShoppingCart1).click();
        cy.xpath(this._validateProduct1Selection).should('be.visible');;
        cy.xpath(this._validateProduct2Selection).should('be.visible');;
    }

    buySelectedItems(){
        cy.xpath(this._buttonCheckout).click();
        cy.xpath(this._optionfirstName).type('juan pablo');
        cy.xpath(this._optionLastName).type('escobar taborda');
        cy.xpath(this._optionPostal).type('33051');
        cy.xpath(this._buttonContinue).click();
        cy.xpath(this._buttonFinish).click();
    }
    
   confirmCompletedPurchase(){
    cy.xpath(this._optionFinish).should('be.visible');;

}


  

}