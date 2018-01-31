// var buffer1 = new Buffer([1,2,3,4,5,6,7,8,9]); //buffer created from the given array
// var buffer2 = new Buffer("Hi i am salik","utf-8"); //buffer created from the given string and optionally encoding


buf = new Buffer(256);
len = buf.write("Simply Easy Learning","utf-8");
console.log("Octets written : "+  len);
console.log(buf.toString("utf-8",0,5)); // encoding,start,end
