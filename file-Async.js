// Loading the file system library
var fs = require("fs");
// File name from the common line params
var fileName = process.argv[2];
// Accessing the content of the file asynchnously

function printa(data,altezza){
  console.log(data)
  altezza++;    
  console.log(altezza);
};

fs.readFile(fileName, "utf8", function(error, data) {
  //console.log(data.split(' ')[0])
  //console.log(data.split(' ')[1])
  printa(data.split(' ')[0],data.split(' ')[1])

});
console.log("Program ended.");
