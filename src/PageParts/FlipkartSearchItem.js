/**
 * Created by Admin on 06-01-2015.
 */

var safeactionsclass = require('./../Utilities/safeActions.js');
var safeactionsobj;
var flipkarthomepageelementslocatorsclass = require('./../PageConstants/Flipkart_HomePage_Elements_Locators.js');
var flipkart_homepage_eLements_locators_obj;
var flipkartloginelementslocatorsclass = require('./../PageConstants/Flipkart_Login_Elements_Locators.js');
var flipkart_login_elements_locators_obj;
var flipkartsearchitemslocatorsclass = require('./../PageConstants/Flipkart_Search_Item_Locators.js');
var flipkart_search_item_locators_obj;

var FlipkartSearchItem = function(browser){

    this.searchItem = function(itemname){

        switch(itemname){

            case 'power_bank':

                safeactionsobj.safeType(flipkart_search_item_locators_obj.typeitemname,"type power_bank","power_bank",30000);
                safeactionsobj.safeClick(flipkart_search_item_locators_obj.clicksearch,"click on search",30000);
                safeactionsobj.safeClick(flipkart_search_item_locators_obj.dgb,"click on dgb",30000);
                break;

            case 'sonyspeakers':

                safeactionsobj.safeType(flipkart_search_item_locators_obj.typeitemname,"type sony speakers","sony speakers",30000);
                safeactionsobj.safeClick(flipkart_search_item_locators_obj.clicksearch,"click on search",30000);
                safeactionsobj.safeClick(flipkart_search_item_locators_obj.sonyspeakers,"click on sony SA-D10",30000);
                break;

            default:
                safeactionsobj.safeType(flipkart_search_item_locators_obj.typeitemname,"type hp laptops","hp laptops",30000);
                safeactionsobj.safeClick(flipkart_search_item_locators_obj.clicksearch,"click on search",30000);
                safeactionsobj.safeClick(flipkart_search_item_locators_obj.hpnotebook,"click on hp15r notebook",30000);

        }

    this.addToCart = function(){
         safeactionsobj.safeClick(flipkart_login_elements_locators_obj.addtocart, "add to cart", 30000);

    };
    };

};


module.exports.getFlipkartSearchItemObject=function(browser)
{
    safeactionsobj = safeactionsclass.getsafeActionsObject(browser);
    flipkart_homepage_eLements_locators_obj=flipkarthomepageelementslocatorsclass.getFlipkart_HomePage_Elements_LocatorsObject(browser);
    flipkart_login_elements_locators_obj = flipkartloginelementslocatorsclass.getFlipkart_Login_Elements_LocatorsObject(browser);
    flipkart_search_item_locators_obj = flipkartsearchitemslocatorsclass.getFlipkart_Search_Item_LocatorsObject();
    return new FlipkartSearchItem(browser);

};


