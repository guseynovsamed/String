"use strict";

//Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin.

function reverseStr(text) {
  let newStr = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newStr += text[i];
  }
  console.log(newStr);
}
//reverseStr("Semed");

//Parametr olaraq gelen yasha gore hansi ilden olduqugunu gosteren function yazin. Meselen 30 gelirse function geriye 1993 qaytarmalidir.

function showDate(age) {
  return new Date().getFullYear() - age;
}

//console.log(showDate(27));

const person1 = {
  id: 1,
  name: "Semed",
  fullName: "Semed Huseynov",
  age: 27,
  salary: 1300,
};

const person2 = {
  id: 2,
  name: "Tunzale",
  fullName: "Tunzale Memmedova",
  age: 23,
  salary: 1800,
};

const person3 = {
  id: 3,
  name: "Ilham",
  fullName: "Ilham Abasli",
  age: 20,
  salary: 100,
};

const person4 = {
  id: 4,
  name: "Aqsin",
  fullName: "Aqsin Veliyev",
  age: 25,
  salary: 1900,
};

const persons = [person1, person2, person3, person4];

// Personlarin umumi sayini geri qaytaran.
function countPerson(persons) {
  let count = 0;
  for (const person of persons) {
    count++;
  }
  console.log(count);
}

//countPerson(persons);

//Personlarin maashlarinin umumi ortalamasini qaytaran.

function averageSalary(persons) {
  let sum = 0;
  let averageSalary = 1;
  for (const person of persons) {
    sum += person.salary;
  }
  averageSalary = sum / persons.length;
  console.log(averageSalary);
}

//averageSalary(persons);

//Personlarin fullName-ne gore search function-u yazin.

function searchPerson(searchtext) {
  const search = persons.filter((person) =>
    person.fullName
      .toLowerCase()
      .toUpperCase()
      .trim()
      .includes(searchtext.toLowerCase().toUpperCase().trim())
  );
  console.log(search);
}

// searchPerson("q");
