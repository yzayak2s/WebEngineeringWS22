const add = (x,y) => x+y;
const equals = (x,y) => x===y;
console.log( add(1,2) );
// JavaScript: bei der Addition von booleans entspricht
//                  1 = true und
//                  0 = false
console.log( add(true, true ) );
console.log( add(true, false ) );
var x = y = 1;
console.log( add(equals(x,y), equals(y,x)) );