/**
 * Created by Admin on 24-12-2014.
 */

var safeactionsclass = require('./../Utilities/safeActions.js');
var safeactionsobj;
var flipkarthomepageelementslocatorsclass = require('./../PageConstants/Flipkart_HomePage_Elements_Locators.js');
var flipkart_homepage_eLements_locators_obj;
var flipkartloginelementslocatorsclass = require('./../PageConstants/Flipkart_Login_Elements_Locators.js');
var flipkart_login_elements_locators_obj;

//navigateToElectronicsPage()
//selectAProduct(string motorola white )
// addToCart(string productName)

var FlipkartHomePage=function(browser) {

    this.navigateToElectronicsPage = function() {
        safeactionsobj.safeHovering(flipkart_homepage_eLements_locators_obj.electronics, "click on electronics", 50000);
        this.verifyElectronicsMenuDisplayed();

    };

    this.verifyElectronicsMenuDisplayed = function(){

        expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.electronics_submenu),"elecronics menu is present or not",50000).toBe(true);

    };

    this.selectAProduct = function(productname) {

        switch(productname){

            case 'motorola':
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.motorola, "click on motorola", 30000);
                expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.motoE, "Verify motoE to present", 50000)).toBe(true);
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.motoE, "click on motoE model", 30000);
                expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.motowhite, "Verify moto white presence", 30000)).toBe(true);
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.motowhite, "click on  motorola white", 30000);
                break;

            case 'canon':
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.canon, "click on canon", 50000);
                expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.canon_powershot, "Verify powershot model presence", 50000)).toBe(true);
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.canon_powershot, "click on canon powershot model", 80000);
                break;

            case 'LG':
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.lgTV, "click on LG LED", 30000);
                expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.LG32, "Verify LG32 model presence", 30000)).toBe(true);
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.LG32, "click on LG32 model", 30000);
                break;

            default :
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.nexus6, "click on nexus6", 30000);
                expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.buynowbtn, "click on buy now", 30000)).toBe(true);
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.buynowbtn, "click on buy now", 30000);
                expect(safeactionsobj.safeVerifyElementPresent(flipkart_homepage_eLements_locators_obj.nexus6white, "Verify nexus6 white model presence", 30000)).toBe(true);
                safeactionsobj.safeClick(flipkart_homepage_eLements_locators_obj.nexus6white, "click on  nexus6 white model", 30000);
        }

    };

    this.addToCart = function(){

        safeactionsobj.safeClick(flipkart_login_elements_locators_obj.addtocart, "add to cart", 50000);
    };

};


module.exports.getFlipkartHomePageObject=function(browser)
{
    safeactionsobj = safeactionsclass.getsafeActionsObject(browser);
    flipkart_homepage_eLements_locators_obj=flipkarthomepageelementslocatorsclass.getFlipkart_HomePage_Elements_LocatorsObject();
    flipkart_login_elements_locators_obj = flipkartloginelementslocatorsclass.getFlipkart_Login_Elements_LocatorsObject(browser);
   return new FlipkartHomePage(browser);

};

