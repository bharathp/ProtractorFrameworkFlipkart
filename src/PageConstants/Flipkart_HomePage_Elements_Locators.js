/**
 * Created by Admin on 24-12-2014.
 */


var Flipkart_HomePage_Elements_Locators= function()
{
    this.electronics=By.xpath(".//*[@class='menu-links']/li[1]");
    this.motorola=By.xpath("(//a[contains(text(),'Motorola')])[1]");
    this.motoE=By.xpath("(//a[contains(text(),'BUY')])[1]");
    this.motowhite=By.xpath("//a[contains(text(),'Moto E (White)')]");
    this.cart=By.xpath(".//*[@href='/viewcart']");
    this.canon=By.xpath("(//a[contains(text(),'Canon')])");
    this.canon_powershot=By.xpath("//a[contains(text(),'SX520')]");
    this.lgTV=By.xpath("//a[contains(text(),'LG LED TV')]");
    this.LG32=By.xpath("//a[contains(text(),'LG 32LB5820 ')]");
    this.nexus6=By.xpath("//a[contains(text(),'Nexus 6')]");
    this.buynowbtn=By.xpath("//*[@class='banner fk-display-block']");
    this.nexus6white=By.partialLinkText("(Cloud White, with 32 GB)");
    this.electronics_submenu=By.id("submenu_electronics");

    };


     module.exports.getFlipkart_HomePage_Elements_LocatorsObject= function()
    {
        return new Flipkart_HomePage_Elements_Locators();
    };

