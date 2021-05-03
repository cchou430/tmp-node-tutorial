//npm -version 
//local dependency - use it only in this particle project
//npm i <packageName>
//
// global dependency - use it in any project
//npm install -g
// 
//package .json - manifest file . stores important info about project/package
//manual approach
//npm init
//npm init -y (everything default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);