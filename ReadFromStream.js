var fs = require('fs');

var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf-8');
//handle streams events => data,end and Error

readerStream.on('data',function(chunk){
  data += chunk;
});
readerStream.on('end',function(){
  console.log(data);
});
readerStream.on('error',function(err){
  console.log(err.stack);
});
console.log('program ended');
