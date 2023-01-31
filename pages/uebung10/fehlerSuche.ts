const add = (x: any,y: any): any => x+y;
const equals = (x: any,y: any): any => x===y;
console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
// Der TypeScript-Compiler meldet an dieser Stelle einen Fehler,
// da y noch gar nicht deklariert wurde.
// Theoretisch könnte man an dieser Stelle die Typ-Parameter
// auch auf number | boolean reduzieren/spezifizieren.
var y: any;
var x: any = y = 1;
console.log( add(equals(x,y), equals(y,x)) );