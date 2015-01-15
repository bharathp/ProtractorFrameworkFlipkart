/**
 * Created by Admin on 24-12-2014.
 */


var flipkarthomepageclass = require('./../PageParts/FlipkartHomePage.js');
var flipkarthomepageobj;
var expectedURL = 'http://www.flipkart.com/';
var productname = 'motorola';'canon';'LG';

describe('select an item and add to cart', function() {


    beforeEach(function(){

        flipkarthomepageobj = flipkarthomepageclass.getFlipkartHomePageObject(browser);
        browser.ignoreSynchronization = true;
    });

    it('should select an electronic product and add to cart', function() {

        flipkarthomepageobj.navigateToElectronicsPage();
        flipkarthomepageobj.selectAProduct('LG');
        flipkarthomepageobj.addToCart();


        //searchAProductAndaddtoCart(string productName)
        //searchAProductandAddtocart(string productName, string modelToAddtoCart)
        //searchAProductandAddtocart(string productName, int positionOfSearchItemTobeAddedtocart)
    });
  });

