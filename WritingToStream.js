var fs = require('fs');

var data = "My favorite Web-Sereas  is Startups";

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',function(){
  console.log('writing finished');
});
writerStream.on('error',function(err){
  console.log(err.stack);
});

console.log('program ended');
