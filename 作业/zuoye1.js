#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2],
      dir1 = process.argv[3],
      path = require('path');
try{
  if(dir == 'list' && typeof(dir1)==='undefined'){    
    fs.readdir(__dirname,(err,files)=>{
      files.forEach(function(file){
        fs.stat(file,(err,st)=>{
          var size = st.size;
          console.log('{"fileName":"%s","fileSize":"%s"}',file,size);
        })
      })
    })
  }
  else if(dir == 'mkdir' && dir2 == 'folder'){
    fs.mkdirSync('folder');
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







