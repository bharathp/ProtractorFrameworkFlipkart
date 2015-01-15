/**
 * Created by Admin on 26-12-2014.
 */


    var Flipkart_Login_Elements_Locators = function(){

    this.login=By.xpath("//a[contains(text(),'Login')]");
    this.username=By.id("login_email_id");
    this.password=By.id("login_password");
    this.loginbtn=By.xpath("(//input[@value='Login'])[2]");
    this.name=By.xpath(".//*[@class='no-border greeting-link']/a");
    this.logout=By.xpath("//a[contains(text(),'Logout')]");
    this.books=By.xpath(".//*[@class='menu-links']/li[5]");
    this.books_submenu=By.id(".//*[@id='submenu_books-media']");
    this.newreleases=By.xpath("(//a[contains(text(),'New Releases')])[1]");
    this.checkenglish=By.xpath(".//*[@id='language']/li[1]/a/input");
    this.offers=By.xpath(".//*[@id='offertags']/li[1]/a/div[1]/input");
    this.item=By.partialLinkText("Cinderella Girl (English)");
    this.addtocart=By.xpath("(.//*[@value='Add to Cart'])[1]");

};


     module.exports.getFlipkart_Login_Elements_LocatorsObject = function()
     {

           return new Flipkart_Login_Elements_Locators();

     };

