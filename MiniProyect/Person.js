//@Autor Samuel Hermosilla Aguilera
var persons = [];
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
//método para añadir personas al array
function addPerson() {
    var pers;
    if ((document.getElementById("Name").value != "") &&
        (Number(document.getElementById("Age").value))) {
        var name_1 = document.getElementById("Name").value;
        var age = Number(document.getElementById("Age").value);
        pers = new Person(name_1, age);
        persons.push(pers);
    }
}
//método para imprimir el contenido del array
function printf() {
    for (var i = 0; i < persons.length; i++) {
        var tmp = persons[i];
        console.log("Name: " + tmp.name);
        console.log("Age: " + tmp.age);
    }
}
