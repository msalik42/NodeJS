var a = __dirname;  //prints directory name
console.log('directory name: '+a);

var b = __filename;  //prints file name along with path
console.log('file name: '+b);  //Console is also a global object

//console.log();
//console.error();
//console.warn();
//The console.log() function is used to display simple message on console.
//The console.error() function is used to render error message on console.
//The console.warn() function is used to display warning message on console.

console.error(new Error('Hell! This is a wrong method.'));

const name = 'John';
console.warn(`Don't mess with me ${name}! Don't mess with me!`);
