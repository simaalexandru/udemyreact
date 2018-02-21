import React  from 'react';
import './App.css';
import Animal from './Animal';


function Wizard(name, house, pet){
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () =>  `I'm ${this.name} from ${this.house}`

}

let harry = new Wizard("Harry Potter", "Gryffindoor" , "Owl");
console.log(harry.greet());
export default 'App';
