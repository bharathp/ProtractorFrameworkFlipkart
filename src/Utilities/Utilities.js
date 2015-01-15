/**
 * Created by Vijay on 7/22/2014.
 */
var Utilities=function()
{
    var now=new Date();
    this.getRandomSignUpEmail=function()
    {

        var signupemail="tellwise+verified+"+now.getDay()+"_"+now.getMonth()+"_"+now.getYear()+"_"+now.getHours()+"_"+now.getMinutes()+"_"+now.getSeconds()+"@tellwise.com";
        return signupemail;
    };


    this.getRandomName=function()
    {
        var contactname="Zenq_"+now.getDay()+"_"+now.getMonth()+"_"+now.getYear()+"_"+now.getHours()+"_"+now.getMinutes()+"_"+now.getSeconds();
        return contactname;
    }
    this.getRandomNumber=function()
    {
        var randomnumber=now.getDay()+"_"+now.getMonth()+"_"+now.getYear()+"_"+now.getHours()+"_"+now.getMinutes()+"_"+now.getSeconds();;
        return randomnumber;
    }
    this.getRandomContactEmail=function()
    {

        var contactemail="tellwise+nosend+"+now.getDay()+"_"+now.getMonth()+"_"+now.getYear()+"_"+now.getHours()+"_"+now.getMinutes()+"_"+now.getSeconds()+"@tellwise.com";
        return contactemail;
    };



};
module.exports.getUtilitiesObject=function()
{
    return new Utilities();
};

