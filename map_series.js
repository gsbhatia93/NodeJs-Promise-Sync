/*
  printing out list using Promise.mapSeries()
  it normally runs promise instances
  execution done one by one
  not done in parallel
  implemented parallel in other program promise_all.js
  slower than promise_all.js

*/
var Promise = require('bluebird');

function test(item) {
    return function(value) {
      return new Promise(function(resolve, reject) {
          setTimeout(function() {
              console.log( item);
              resolve(item);
          }, Math.random()*1000);
      });
    };
}

var array= [];
for(i=1;i<=100;i++){
  array.push(test(i))
}
Promise.resolve(array)
       .mapSeries(function(asyncMethodPassed) {
    return asyncMethodPassed();
}).then(function(results) {
    console.log('result', results);
});
