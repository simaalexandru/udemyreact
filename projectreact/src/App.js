import React  from 'react';
import './App.css';
import Animal from './Animal';

let string = 'qwertyuiopasdfghjkldasjndkas';
let letters = new Map();
for (let i=0; i<string.length; i++){
  let letter = string[i];
  //check if the map has the letter
  if(!letters.has(letter)){
     letters.set(letter, 1);
   }else{
     letters.set(letter, letters.get(letter) +1);
   }
  }

console.log(letters);
//counter to know who took the letter
//maps prevent from duplicatin keys

export default 'App';
