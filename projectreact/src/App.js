import React  from 'react';
import './App.css';
import Animal from './Animal';


function Wizard(name, house, pet){
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () =>  `I'm ${this.name} from ${this.house}`
}

Wizard.prototype.pet_name; //function
//arrow function doesn't create a this object for the function prototype to referenc
//instead, when use the prototype keyword to define a method , use normal function declaration
Wizard.prototype.info = function(){
  return `I have ${this.pet} named ${this.pet_name}`
};

let harry = new Wizard("Harry Potter", "Gryffindoor" , "Owl");
harry.pet_name = "Hedwig";

console.log(harry.info());
export default 'App';
