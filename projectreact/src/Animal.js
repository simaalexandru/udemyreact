class Animal{
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  hello(){
    console.log(`Hi, I'm ${this.name} from the animal kingdom`);
  }
}

export default Animal;
