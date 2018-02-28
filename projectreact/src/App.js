import React  from 'react';
import './App.css';
import Animal from './Animal';



function* letterMaker() {
   //genetaror has a flow control(allows you to pause and resume)
   yield 'a';
   yield 'b';
   yield 'c';
}

//no use of new keywork when creating instance of a genetator
let letterGen = letterMaker();
//.value = accessing the return value
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
//accesing the .yield
