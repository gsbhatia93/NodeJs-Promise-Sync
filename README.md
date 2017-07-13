# NodeJs-Promise-Sync

Solution to the problem of synchronizing code that needs to execute 
one after the other using Bluebird's Promise API.
ORDER MATTERS
1.parallel execution: using Promise.all([promises]), starts them in parallel,
finishes only when all are done and returns result for all in the order in which they were passed.

2. serial execution : Promise.mapSeries executes only one after the other hence slower but result 
according to our iterative order.


