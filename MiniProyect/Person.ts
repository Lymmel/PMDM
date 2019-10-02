//@Autor Samuel Hermosilla Aguilera

let persons:Person[] = [];

class Person {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
}

//método para añadir personas al array
function addPerson(){
    let pers:Person;
    
    if(((<HTMLInputElement>document.getElementById("Name")).value != "")  && 
    (Number((<HTMLInputElement>document.getElementById("Age")).value))){

      let name=(<HTMLInputElement>document.getElementById("Name")).value;
      let age=Number((<HTMLInputElement>document.getElementById("Age")).value);
      pers = new Person(name,age);
      persons.push(pers);
    }
}

//método para imprimir el contenido del array
function printf(){
    for(let i=0; i<persons.length; i++){
        let tmp = persons[i];
        console.log("Name: "+tmp.name);
        console.log("Age: "+tmp.age);
    }
}

