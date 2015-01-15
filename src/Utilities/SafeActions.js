/**
 * Created by Vijay on 7/3/2014.
 */
var log4js = require('log4js');
log4js.loadAppender('file');
var logger = log4js.getLogger('log');
log4js.addAppender(log4js.appenders.file('logs/log_file.log'), 'log');
logger.setLevel('INFO');
var SafeActions = function (ptor){
var obj=ptor;
//console logs is loaded by default, so you won't normally need to do this
//log4js.loadAppender('console');
//log4js.addAppender(log4js.appenders.console());
    this.waitandfindelement = function(identifier,friendlyname,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
       // console.log(identifier.value);

        obj.wait(function(){
            return obj.isElementPresent(identifier);
        },timeout).thenCatch(function(error){
            console.log(friendlyname+" --not present");
            error.message=friendlyname+" --Not Present";
            error.stack="Waited for "+timeout/1000+" seconds";
            error.description="";
            logger.error(error);
            throw error;
        });
        var ele=obj.findElement(identifier);
        obj.wait(function(){
            return ele.isDisplayed();

        },timeout).thenCatch(function(error){
            console.log(friendlyname+" --not Displayed");
            error.message=friendlyname+" --Not Displayed";
            error.stack="Waited for "+timeout/1000+" seconds";
            error.description="";
            logger.error(error);
            throw error;
        });

        obj.wait(function(){
            return ele.isEnabled();

        },timeout).thenCatch(function(error){
            console.log(friendlyname+" --not Enabled");
            error.message=friendlyname+" --Not Enabled";
            error.stack="Waited for "+timeout/1000+" seconds";
            error.description="";
            logger.error(error);
            throw error;
        });



        return ele;
    };
    this.waitandfindmultiple=function(identifier,friendlyname,timeout)
    {
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;



        var ele=obj.wait(function(){
           return obj.driver.findElements(identifier);
        },timeout).thenCatch(function(error){
            console.log(friendlyname+" --not Displayed");
            error.message=friendlyname+" --Not Displayed";
            error.stack="Waited for "+timeout/1000+" seconds";
            error.description="";
            logger.error(error);
            throw error;
        });
        // ele.then(function(ele){return ele});
        //ele.then(function(ele){return ele;})
        return ele;
    };

    this.safeType = function(identifier,friendlyname,texttoenter,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
      var ele= this.waitandfindelement(identifier,friendlyname,timeout);

        this.setHighlight(ele);
        //ele.clear();
        ele.sendKeys(texttoenter).then(function(){ logger.info("Entered ["+texttoenter+"] under --"+friendlyname);},function(error){error.message="Unable to type under "+friendlyname;logger.error(error);throw error;});


    };

    this.safeClick = function(identifier,friendlyname,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
        var ele= this.waitandfindelement(identifier,friendlyname,timeout);
        this.setHighlight(ele);
        ele.click().then(function(){logger.info("Clicked on --"+friendlyname);},function(error){error.message="Unable to click on "+friendlyname;logger.error(error);throw error;});

    };

    this.safeVerifyElementPresent = function(identifier,friendlyname,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;


        var flag=obj.wait(function(){

           flag= obj.isElementPresent(identifier).then(function(passed){if(passed===true){return true;}});

            flag.then(function(flag){if(flag===true){return true;}}).then(function(val){flag=val;});
           // console.log(flag);

            //flag=true;
            return flag;

        },timeout).thenCatch(function(error){
            flag=false;

            error.message=friendlyname+" --Not Present";
            logger.error(error.message);
            error.stack="Waited for "+timeout/1000+" seconds";
            logger.error(error);
            throw error;

        });
        //console.log(flag);
        return flag;

    };

    this.safeSwitchtoFrame = function(frameidentifier,Friendlyname,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
        this.safeVerifyElementPresent(frameidentifier,Friendlyname,timeout);
        obj.switchTo().frame(obj.driver.findElement(frameidentifier)).thenCatch(function(error){
            error.message="Unable to Switch to --"+Friendlyname;
            error.stack="";
            logger.error(error);
            throw  error;
        });

    };
    this.defaultFrame=function()
    {
        ptor.driver.switchTo().defaultContent();

    };

    this.safeClearandType=function(identifier,friendlyname,texttoenter,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
        var ele= this.waitandfindelement(identifier,friendlyname,timeout);
        this.setHighlight(ele);
        ele.clear().then(function(){logger.info("Cleared content under --"+friendlyname);});

        ele.sendKeys(texttoenter).then(function(){logger.info("Entered ["+texttoenter+"] under --"+friendlyname);});


    };

    this.safeSelectOption=function(selecttagidentifier,friendlyname,optionindex,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
        var ele=this.waitandfindelement(selecttagidentifier,friendlyname,timeout);
        this.setHighlight(ele);
        if(optionindex!=='undefined')
        {

        var options=ele.findElements(By.tagName('option')).then(function(options){
            options[optionindex].click().then(function(){logger.info("Given option selected under --"+friendlyname)});
        },timeout).thenCatch(function(error){
            error.message="Unable to Click on the Option specified";
            error.stack="Waited for "+timeout/1000+" Seconds";
            logger.error(error);
            throw error;
        });
        }
        else
        {
            error.message='Option index Value not Specified';
            logger.warn(error);
            throw error;
        }
    };

    this.setHighlight=function(elementtohighlight)
    {
        var attribValue="border:3px solid red;";
        var getattrib=elementtohighlight.getAttribute("style");
            obj.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementtohighlight, attribValue);
        obj.sleep(100).thenCatch(function(error){});
        obj.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementtohighlight, getattrib);

    };

    this.safeSelectCheckBox=function(checkboxlocator,friendlyname,timeout)
    {
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
        var ele=this.waitandfindelement(checkboxlocator,friendlyname,timeout);
        this.setHighlight(ele);
        ele.click().then(function(){logger.info("Selected checkbox --"+friendlyname)},function(error){error.message="Unable to select "+friendlyname;logger.error(error);throw error;});

    };
    //NotWorking
    this.safeDragandDrop=function(sourceelementidentifier,sourcefriendlyname,destinationelement,desctinationfriendlyname,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;

        var sourceele=this.waitandfindelement(sourceelementidentifier,sourcefriendlyname,timeout);
        var destele=this.waitandfindelement(destinationelement,desctinationfriendlyname,timeout);
        //this.setHighlight(sourceele);
       // this.setHighlight(destele);
        //obj.actions().dragAndDrop(sourceele.then(function(sourceelem){sourceele=sourceelem;}),destele.then(function(destelem){destele=destelem;})).perform();
        sourceele.then(function(sourceelem){sourceele=sourceelem;obj.actions().dragAndDrop(sourceele,{x:500,y:500}).perform().then(function(passed){})});

    };


    this.safeHovering=function(elementindentifier,friendlyname,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
       // var ele=this.waitandfindelement(elementindentifier,friendlyname,timeout);
        var ele=this.waitandfindelement(elementindentifier,friendlyname,timeout);
        ele.then(function(ele){
            obj.actions().mouseMove(ele).perform().then(function(passed){
                logger.info("Hovered on "+friendlyname);
                console.log("Action Performed")});
        });

    };

    this.safeGetAttribute=function(identifier,friendlyname,attributename,timeout){
        timeout = typeof timeout !== 'undefined' ? timeout : 30000;
         var returnvalue;
        if(typeof attributename !== 'undefined')
        {


        var ele=this.waitandfindelement(identifier,friendlyname,timeout);
            if(attributename.toLowerCase()==="text")
            {
                returnvalue=ele.getText(attributename.toLowerCase());
            }
            else{
        returnvalue=ele.getAttribute(attributename.toLowerCase());
            }

       returnvalue.then(function(attributevalue){returnvalue=attributevalue;},function(error){
            error.message="Unable to retrieve "+attributename+" for "+friendlyname;
            throw error;
        }).then(function(returnval){});
            //console.log(returnvalue);
            return returnvalue;
        }
        else
        {
            console.log('Attribute name not passed');
        }



    };
    this.safeMatchTextInMultiple=function(locatorofmultiple,friendlyname,texttomatch)
    {

        var ele=element.all(locatorofmultiple);
        ele.then(function(elem) {

            if (elem.length === 0) {

                throw new Error(friendlyname+" not found");
            }
        });
        var txtmatch;

        for(var i=0;i<ele.length;i++)
        {
            var textmatch=ele[i].getText();
            textmatch.then(function(text){if(text==texttomatch){txtmatch=text;}});
            textmatch.then(function(){
                if(texttomatch==txtmatch && i==ele.length-1)
                {

                }else
                {
                    throw new Error(textmatch+" not available under"+friendlyname);
                }
            });
        };
    };
};
module.exports.getsafeActionsObject = function(ptor){

    return new SafeActions(ptor);

};