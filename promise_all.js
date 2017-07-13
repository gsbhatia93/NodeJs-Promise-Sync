/*
  solved the problem using Promise.all() from bluebird library
  executes for all in paralllel
  one promise does not wait for other to complete
  logs the result only when all are done
  I have also implemented this serially using Promise.mapSeries()
  In serial execution a promise waits fr the previous one to Complete

*/

var Promise = require('bluebird');
var promiseCall = function (waitSecond, returnData) {
    return function (resolve, reject) {
        setTimeout(resolve, waitSecond, returnData);
    };
};

var array=[]
for(i=1;i<=100;i++){

  array.push(new Promise(promiseCall(Math.random()*1000, i)))
}

Promise.all(array).then(function (value) {
    console.log(value);
}, function (reason) {
    // Not Called
    console.log(reason);
});
