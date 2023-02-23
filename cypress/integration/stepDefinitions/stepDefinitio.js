import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { login } from '../page/login';
import { product } from '../page/product';
import { shoppingCart } from '../page/shoppingCart';

const LOGUIN = new login();
const PRODUCT = new product();
const SHOPPINGCART = new shoppingCart();



Given (/I am logged into the shopping site/, () => {
      LOGUIN.login();
});

When  (/I select one or more items/, () => {
    PRODUCT.selectProducts();
    PRODUCT.validateSelectProducts();


});
And   (/I add them to the shopping cart/, () => {
    SHOPPINGCART.validatshoppingCart();
    SHOPPINGCART.buySelectedItems();


});

Then  (/process to make the purchase of the selected items correctly/, () => {
    SHOPPINGCART.confirmCompletedPurchase();

});