//Hello.js
require("./Hello.js");


//foo.js
require('./foo.js');
foo();
// export an anounymous function
var test = require('./foo.js');
test();


//bar.js
//export a named function
var bar = require('./bar.js').bar;
bar();

//bar4.js
//exports an anoymoous object
var b = require('./bar4.js');
b.say();

//bar5.js
//exports a named object
var b = require('./bar5.js').Bar5;
b.say();

//cool.js
//export an anonymous prototype
var Cool = require('./cool.js');
var coo = new Cool();
coo.say();

//ang.js
//export a named prototype
var Ang = require('./ang.js').Ang;
var wer = new Ang();
wer.say();

