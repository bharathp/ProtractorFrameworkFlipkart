/**
 * Created by Admin on 06-01-2015.
 */


var flipkartsearchitemclass = require('./../PageParts/FlipkartSearchItem.js');
var flipkartsearchitemobj;
var flipkarthomepageelementslocatorsclass = require('./../PageConstants/Flipkart_HomePage_Elements_Locators.js');
var flipkart_homepage_eLements_locators_obj;
var itemname = 'power_bank';'sonyspeakers';'hp';



describe('search an item and add to cart', function() {


    beforeEach(function(){

        browser.ignoreSynchronization = true;
        flipkartsearchitemobj = flipkartsearchitemclass.getFlipkartSearchItemObject(browser);

    });

    it('should search an item  and add to cart', function() {

        flipkartsearchitemobj.searchItem('sonyspeakers');
        flipkartsearchitemobj.addToCart();

    });
});



