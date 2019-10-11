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
    (Number((<HTMLInputElement>document.getElementById("Age")).value) != 0 )){

      let name=(<HTMLInputElement>document.getElementById("Name")).value;
      let age=Number((<HTMLInputElement>document.getElementById("Age")).value);
      pers = new Person(name,age);
      persons.push(pers);
      //ahora vamos a hacer que cuando se introduzca un dato se borre del campo de texto para poder ingresar otro.
      let naamee:HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
      let aagee:HTMLInputElement = <HTMLInputElement>document.getElementById("Age");
      naamee.value="";
      aagee.value="";
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


/*

//método que imprime el contenido del array en modo tabla.
function printfTable() {
    
   if(persons.length>=0){

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    // Crea las celdas
    for (var i = 0; i < persons.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      var hilera2 = document.createElement("tr");
      let tmp = persons[i];

      for(var j = 0; j < persons.length; j++){
        var celda = document.createElement("td");
        var celda2 = document.createElement("td");
        
        
        var textoCelda = document.createTextNode("Nombre "+tmp.name);
            
        var textoCelda2 = document.createTextNode("Edad "+tmp.age.toString());
            
        celda.appendChild(textoCelda);
        celda2.appendChild(textoCelda2);
        hilera.appendChild(celda);
        hilera2.appendChild(celda2);
      }
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
      tblBody.appendChild(hilera2);
    }
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        document.getElementById("mytable").appendChild(tabla);
        tabla.setAttribute("border", "2");
   }
}

*/



function printfTable(){  
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("mytable");
    // en vez de hacer esto dentro del for: let tbody = <HTMLTableSectionElement>table.createTBody();
    //hacemos la siguiente linea y creamos el tbody en el archivo .html
    let tbody: HTMLTableElement = <HTMLTableElement>document.getElementById("myTbody");
    //con esto cada vez que imprimimos limpiamos la lista e imprimimos el array, así evitamos repetir datos en la tabla.
    tbody.innerHTML='';
    for(let i=0; i<persons.length; i++){  
      let tmp = persons[i];
      let row = tbody.insertRow(i); // en vez de let row = tbody.insertRow(0); le ponemos la i, asi no nos imprimirá el array al revez
      let cell = row.insertCell(0);             // si no tal y como estamos añadiendo los datos a la tabla
      let cell2 = row.insertCell(1);
      cell.innerHTML = (tmp.name);
      cell2.innerHTML = (tmp.age.toString());
    } 
}


