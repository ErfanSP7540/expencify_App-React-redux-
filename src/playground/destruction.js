console.log('khanoomamm');


const person ={
    name :'erfan',
    age:25,
    location:{
        city:'Arak',
        temp:5
    }
}

const {name ,age } = person;

//const name = person.name;
//const age = person.age;

console.log( `${name} is ${age}`);



 const {city , temp } = person.location;
//const city = person.location.city;
//const temp = person.location.temp;

if (city && temp){
    console.log(`Its ${temp} in ${city}`);
}




// 
const item = ['coffee (Hot)' , '$3.5' , '$4.5' , '$5'];

const [drink , , mediumPrice ] = item ;
console.log(` ${drink}  is ${mediumPrice}`);

