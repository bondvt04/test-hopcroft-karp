'use strict';

const { hopcroftKarp } = require('hopcroft-karp');
const b1 = { x: '110', y: '120', z: '130' };
const b2 = { x: '210', y: '220', z: '230' };
const b3 = { x: '310', y: '320', z: '330' };
const b4 = { x: '410', y: '420', z: '430' };
const b5 = { x: '510', y: '520', z: '530' };
const b6 = { x: '610', y: '620', z: '630' };

console.time('Karp Evaluation Time');
const obj = {};
// UNCOMMENT THIS TO TEST WITH NUMBERS
// for (var i=1; i<=10000; i++) {
//   obj[`a${i}`] = [1,2,3];
// }
// for (var i=101; i<=20000; i++) {
//   obj[`a${i}`] = [4,5,6];
// }
for (var i=1; i<=10000; i++) {
  obj[`a${i}`] = [b1,b2,b3];
}
for (var i=101; i<=20000; i++) {
  obj[`a${i}`] = [b4,b5,b6];
}
const result = hopcroftKarp(obj);
console.timeEnd('Karp Evaluation Time');
