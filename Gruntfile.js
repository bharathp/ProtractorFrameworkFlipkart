
module.exports = function(grunt) {
    var reportdirobj=require('./src/Utilities/reportdirectoryhandler.js');
    var path=require('path');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Protractor here is a grunt plug-in, which takes config file and selenium ports are params

    protractor:{
			 options:{
			         keepAlive:true,
					 configFile:"src/Conf.js"
					},
			singlerun:{},
			auto:{
			    
				 options:{
				  keepAlive:true,
				       args:{
							seleniumPort:4444
					        }
						}
                 }			
   },
   //Shell is grunt plug-in which basically runs commands from console. two commands here we perform are download webdriver-manager and install all 
   //it's dependencies and webdriverserver_launch launches webdriver server
   
   shell:{
   options:{

			stdout:true
           },
		   protractor_install:{
								command: 'webdriver-manager update'
							   },
		   webdriverserver_launch:{
			   				command: 'webdriver-manager start'
		   						},				   
	       npm_install:{
		   command:'npm install'
		   }
		   
   },
 //Grunt-open is another plug-in which opens html files on your favourite browsers
 open:{
 
  report:{
   path:function(){return path.resolve('reports/recent/reporter.html');},
   app:'chrome'
  }
 },
 
 //grunt-clean is another plug-in which deletes files or folders
 clean:[ "reports/recent"],
 

    jshint:{
      files: ['gruntfile.js', 'testSuites/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
 
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-clean');
 // grunt.loadNpmTasks('grunt-parallel');
    grunt.registerTask('report',['open:report']);
    grunt.registerTask('reporthandler','Maintaining old reports',function(){var done=this.async();
        setTimeout(function() {
            // Let's simulate an error, sometimes.
            var success = reportdirobj.handlereports();
            // All done!
            done(success);
        }, 1000);
        });
  grunt.registerTask('default',['reporthandler','clean','jshint','protractor:auto','open:report']);
  grunt.registerTask('install',['shell:npm_install','shell:protractor_install','shell:webdriverserver_launch']);

};
