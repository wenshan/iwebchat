const fs = require("fs");
const path = require("path");
const Shell = require('shelljs');
const ReadPkgUp = require('read-pkg-up');
const Git = require('simple-git')();
//const Git = require('simple-git/promise');

var filePath = path.resolve();
var fileArr = [];
/*
ReadPkgUp().then(result => {
  if (!Shell.which('git')) {
    Shell.echo('Sorry, this script requires git');
    Shell.exit(1);
  }

  Shell.cd('build');
  Shell.echo(Shell.pwd());
  Shell.echo(Shell.ls('-A', result.pkg.name));
  Shell.exec('tar -cvf FE.' + result.pkg.name + '_' + result.pkg.version + '_' + Moment().format('YYYYMMDDHHmm') +'.tar config-center');
  Shell.exec('git status');
});
*/


//读取文件目录
fs.readdir(filePath + '/src/components/',function(err,files){
    if(err){
        console.log(err);
        return;
    }
    var count = files.length;
    console.log(filePath,files);
    //console.log(count);
    var results = {};
    Shell.echo(Shell.pwd());
    Shell.cd(filePath + '/src/components/');
    Shell.echo(Shell.pwd());
    files.forEach(function(filename){
      //console.log(filename);
      if(!filename){
          console.log(err);
          return false;
      }
      Shell.cd(filename);
      Shell.echo(Shell.pwd());
      if (!Shell.which('git')) {
        Shell.echo('Sorry, this script requires git');
        Shell.exit(1);
      }
      console.log(122);
      setTimeout(function(){
        Git.add('-A')
           .status()
           .commit('-m"git push"')
           .status()
      },1000)

      Shell.cd('../');
    });
});
