var myPromise = new Promise(function (res) {
    // async code to be executed, when ready, call res() to resolve the promise
    res('any_value');
});
// when not yet resolved
console.log(myPromise);
// once resolved
console.log(myPromise);
//Promise { <pending> }
//Promise { 'any value' }
 
