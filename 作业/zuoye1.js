#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2],
      dir1 = process.argv[3],
      path = require('path');
try{
  if(dir == 'list' && typeof(dir1)==='undefined'){    
    //读取当前目录下所有文件的列表
    fs.readdir(__dirname,(err,files)=>{
      if(err){
        console.error(err);
      }else{
        files.forEach(function(file){
          fs.stat(file,(err,stats)=>{//获取文件信息
            var size = stats.size;
            console.log('{"fileName":"%s","fileSize":"%s"}',file,size);//按要求输出
          })
        })
      }
    })
  }
  else if(dir == 'mkdir' && dir2 == 'folder'){
    fs.mkdirSync('folder');//创建目录
  }
  else if(typeof(dir) === 'undefined'){
    console.error('没有输入命令行参数！');
    process.exit(1);
  }else{
    console.error('输入未知命令！');
    process.exit(1);
  }
}catch(err){
  console.error(err.message);
  process.exit(1);
}







