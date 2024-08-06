let person = {
  name: "farangiz",
  surname: "tutu",
  age: 100
}

person.age = 18
person.name = "fara"

person.address = "Tashkent"

person["name"] = "muslima"

person["surname"] = "kira"

let car = {
  brand: "BMW",
  model: "m5cs",
  horsePower: 150,
  start: function() {
    console.log("kiki");
    
  }

}

car.color= "black"
car.horsePower = 1200

// car.start()
// console.log(person);

let car2 = {...car}








let company = {
  name:"GitHub",
  owner: {
    name: "Chris",
    surname: "Wanstrath",
    networth: "2.2 billion",
    address: {
      city: "San Francisco",
      street: "kiki"
    }
  }
}

let book = {
  title: "voyna i mir",
  author: "lev tolstoy",
  year: 1867
}

book.price = "1200$"

let book2 = {...book}

book2.title = "voyna i mir 2"
book2.year = 2024




function  print(obj) {
  for(let key in obj) {
    console.log( `${key} : ${obj[key]}`);
  }
}

// print(book)
// console.log("........");
// print(book2)
// console.log(company);

let school = { 
  name: "President School",
  teachers:{ 
    math: "Davlat Polatov",
    english: "Miss Elina"
  },
  students: {
    1: "Kim Vitaliy",
    2: "Kim David"
  },
  hasCanteen: true,
  hasToilet: true,
  rooms: 163
}

console.log(school);



