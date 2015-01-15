/**
 * Created by Vijay on 7/7/2014.
 */
var mkdirobj=require('mkdirp');
var fs=require('fs-extra');
var nodefs=require('node-fs');

module.exports.handlereports=function(){

    var complestring="";
    if(nodefs.existsSync('reports/recent'))
    {

    nodefs.stat('reports/recent',function(err,stat1){
        try {
            var ctime1 = stat1.ctime.toString();
            var arr1 = ctime1.split(' ');
            var arr2 = arr1[4].split(':');

            for (var i = 1; i < arr1.length - 5; i++) {

                complestring += arr1[i] + '_';

            }
            complestring += arr2[0] + '_' + arr2[1] + '_' + arr2[2];
            console.log(complestring);

            mkdirobj('reports/' + complestring, function (done) {
                });
            fs.copySync('reports/recent', 'reports/' + complestring);

           // fs.copy('reports/recent', 'reports/' + complestring).then(function(passed){});

        }catch(err){}
    });


    }






};
