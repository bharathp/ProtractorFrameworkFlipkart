var HtmlReporter=require('protractor-html-screenshot-reporter');
var path=require('path');
var reportdir=require('./Utilities/reportdirectoryhandler.js');

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 30000,
  multiCapabilities:
   [

       /* {
          browserName: 'firefox',
        'shardTestFiles': true,
          'count': 1,
          specs: ['./TestSuites/*.js']
     }, */

       {
          'browserName': 'chrome',
          'shardTestFiles': true,
          'count': 1,
           specs: ['./TestSuites/*.js']
      },

       /* {
           'browserName': 'internet explorer',
            seleniumArgs: ['-Dwebdriver.ie.driver = C:\Users\Admin\AppData\Roaming\npm\node_modules\protractor\selenium\IEDriverServer.exe'],
           'shardTestFiles': true,
           'count': 1,
           specs: ['./TestSuites/*.js']
       }*/

  ],
    splitSpecsBetweenCapabilities: true,

params:{
    domain:{
        url:''

    },
    login:{
       user:'',
        password:''
    }

},
  //Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      isVerbose: true,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 99999,
      isAlive: true
  },
   onPrepare:function(){
       browser.driver.manage().deleteAllCookies();
       browser.driver.ignoreSynchronization=true;
       browser.driver.manage().timeouts().pageLoadTimeout(40000);
       browser.driver.manage().window().maximize();
       browser.driver.get('http://www.flipkart.com/');
       //browser.driver.get(browser.params.domain.url);


        jasmine.getEnv().addReporter(

            new HtmlReporter({
                baseDirectory:'reports',
                takeScreenShotsOnlyForFailedSpecs: true,

                pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {

                    return path.join('recent',descriptions.join('-'));
                }

            }));

    }

};
