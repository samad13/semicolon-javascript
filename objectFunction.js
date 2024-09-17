const counter = {
count: 1,
step:1,
increment:function increase(){


return this.count += this.step;


},
decrement:function decrease(){


return this.count -= this.step;


}



}

//console.log(counter.decrement());


const book = {title: "The Great Gatsby", author: "F. Scott Fiztzgerald", yearPublished: 1925};

const {title, author, yearPublished} = book;
console.log(title + " by " + author);


const car= {
make: 'Toyota', model: 'Camry', year:2021}


function name(car){ 
let mep = " "
for ( key in car) {
     mep +=key +":"+car[key]+" ";
  
}

return mep

}
console.log(name(car))

const person = {firstName: "samad", lastName: "dayo", fullName:function (){

return this.firstName +" "+ this.lastName
}


}
console.log(person.fullName())

const person2 = {firstName: "john", lastName: "doe", age: 25 }

function name (person2){
let person = " "

for ( key in person2) {
    person +=key +": "+person2[key]+", ";
  
}
return   person
}
console.log(name(person2))