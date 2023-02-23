export class product {
   

    _optionProduct1=  "//div[@class='inventory_list']//div//div[@class='inventory_item_description']//a//div[text()='Sauce Labs Backpack']//..//..//..//button[@id='add-to-cart-sauce-labs-backpack']";
    _optionProduct2=  "//div[@class='inventory_list']//div//div[@class='inventory_item_description']//a//div[text()='Sauce Labs Bike Light']//..//..//..//button[@id='add-to-cart-sauce-labs-bike-light']";
    _validateProduct1="//button[@id='remove-sauce-labs-backpack']";
    _validateProduct2="//button[@id='remove-sauce-labs-bike-light']";

    
    selectProducts(){
        cy.xpath(this._optionProduct1).click();
        cy.xpath(this._optionProduct2).click();
    }

    validateSelectProducts(){
        cy.xpath(this._validateProduct1).should('be.visible');
        cy.xpath(this._validateProduct2).should('be.visible');
    }
   

}