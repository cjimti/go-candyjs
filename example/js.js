var global = {};
var module = {};

var circle = require('./circle.js');
console.log('The area of a circle of radius 4 is ' + circle.area(4));

var filesize = require("./filesize.min.js")
console.log(filesize(1234))
