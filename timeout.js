setTimeout(()=>{
      setTimeout(()=>{
            console.log(123)
        }, 5000)    // later, wait for another 5 seconds
}, 1000)    // first wait 1 second

myPromisifiedTimeout = function (time) {
    return new Promise( (res) => setTimeout(res, time) )
}

myPromisifiedTimeout(1000)              //first wait for 1 second
.then(()=>{return myPromisifiedTimeout(5000)})   // later wait for additional 5
.then(()=>console.log(123))

const fs = require('fs');
const readPromisify = function (file) {
     return new Promise(function (resolve, reject) {
         fs.readFile(file, (err, data) => {
             if (err) throw reject(err);
             resolve(data); data
         });
}); }
 readPromisify('prova')
 .then(function (data) {
       console.log("Promise resolved successfully");
 })
 .catch(function (err) {
     console.log("Promise is rejected");
});

