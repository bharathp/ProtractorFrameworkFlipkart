/**
 * Created by Admin on 26-12-2014.
 */

var flipkartloginpageclass = require('./../PageParts/FlipkartLoginPage.js');
var flipkartloginpageobj;
var expectedURL = 'http://www.flipkart.com/';

describe('login and select an item and add to cart', function() {


    beforeEach(function(){

        browser.ignoreSynchronization = true;
        flipkartloginpageobj = flipkartloginpageclass.getFlipkart_Login_PageObject(browser);
        flipkartloginpageobj.performLogin();

    });

    it('should login and select a book', function() {

        flipkartloginpageobj.navigateToBooksPage();
        flipkartloginpageobj.selectBook();
        flipkartloginpageobj.addToCart();

    });

    afterEach(function(){

        flipkartloginpageobj.performLogout();

    });



});
