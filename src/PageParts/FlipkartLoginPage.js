/**
 * Created by Admin on 26-12-2014.
 */

var safeactionsclass =  require('./../Utilities/SafeActions.js');
var safeactionsobj;

var flipkartloginelementslocatorsclass  = require('./../PageConstants/Flipkart_Login_Elements_Locators.js');
var flipkart_Login_elements_locators_obj;

var FlipkartLoginPage = function(browser){

     this.performLogin = function(){

         safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.login,"click on login",30000);
         safeactionsobj.safeType(flipkart_Login_elements_locators_obj.username,"type username","bannu89@gmail.com",30000);
         safeactionsobj.safeType(flipkart_Login_elements_locators_obj.password,"type password","flipkart",30000);
         expect(safeactionsobj.safeVerifyElementPresent(flipkart_Login_elements_locators_obj.loginbtn,"Verify login button presence",80000)).toBe(true);
         safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.loginbtn,"click on login button",80000);
     };

    this.performLogout = function(){

        safeactionsobj.safeHovering(flipkart_Login_elements_locators_obj.name,"click on username",50000);
        safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.logout,"click on logout",50000);

    };

    this.navigateToBooksPage = function(){
        safeactionsobj.safeHovering(flipkart_Login_elements_locators_obj.books,"click on books",50000);
        //this.verifyBooksPageDisplayed();
    };

    this.selectBook = function(){

        safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.newreleases,"click on new releases",30000);
        safeactionsobj.safeSelectCheckBox(flipkart_Login_elements_locators_obj.checkenglish,"check on english",30000);
        safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.offers,"click on offers button",30000);
        expect(safeactionsobj.safeVerifyElementPresent(flipkart_Login_elements_locators_obj.item,"verify presence of item",50000)).toBe(true);
        safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.item,"click on a book",30000);
        expect(safeactionsobj.safeVerifyElementPresent(flipkart_Login_elements_locators_obj.addtocart," Verify add to cart Presence",80000)).toBe(true);

    };

    this.addToCart = function(){
        safeactionsobj.safeClick(flipkart_Login_elements_locators_obj.addtocart,"add to cart",80000);

    };

    this.verifyBooksPageDisplayed = function(){

        expect(safeactionsobj.safeVerifyElementPresent(flipkart_Login_elements_locators_obj.books_submenu),"books submenu is present or not",50000).toBe(true);

    };
};

module.exports.getFlipkart_Login_PageObject = function(browser){

    safeactionsobj = safeactionsclass.getsafeActionsObject(browser);
    flipkart_Login_elements_locators_obj = flipkartloginelementslocatorsclass.getFlipkart_Login_Elements_LocatorsObject();
    return new FlipkartLoginPage(browser);
};