var assert = require('assert');
const obj1 = {
a:{
  b: 1
  }
};
const obj2 = {
a:{
  b: 2
  }
};
const obj3 = {
a:{
  b:1
  }
};
assert.deepEqual(obj1,obj3); //no error

assert.deepEqual(obj1,obj2); //erroe (Exception)
