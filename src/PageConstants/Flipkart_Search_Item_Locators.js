/**
 * Created by Admin on 06-01-2015.
 */
var Flipkart_Search_Item_Locators= function()
{

    this.typeitemname=By.id("fk-top-search-box");
    this.clicksearch=By.xpath(".//*[@value='Search']");
    this.dgb=By.partialLinkText("PB-13000 Power Bank");
    this.sonyspeakers=By.partialLinkText("Sony SA-D10 ");
    this.hpnotebook=By.partialLinkText("HP 15-r119TU Notebook");


};


module.exports.getFlipkart_Search_Item_LocatorsObject= function()
{
    return new Flipkart_Search_Item_Locators();
};
