function addEverytwoNumbers(numbers){
    let arr=[];
for(let count = 0; count < numbers.length;count++){
    if(count %2 != 0){
       arr.push(numbers[count-1] + numbers[count])  
    }
}
    if(numbers.length %2 != 0){
        arr.push(numbers[numbers.length-1])
}
    return arr;

const { number } = require("yargs");

}

let arr = [3,4,5,6,7,8]
let fruits = ['bananna', 'mango', 'orange']

arr.forEach((element)=>console.log(element *3))

let filtered = arr.filter((somethng) => somethng % 2==0)
const getFruitLength =(fruits)=>{
    let fruit = fruits.filter((fruits) => fruits.length>5)
    return fruit
}
let some=[{name:"john", age:23},{name:"dayo", age:12}]
const maparr =(some)=>{
     return some.filter((obj) => obj.age >12)
}
console.log(maparr(some))

const maparray =(fruits)=>{
    let fruit = fruits.map((fruits) => fruits.length>5)
    return fruit
}
console.log(maparray(fruits))



function toObject(arr) {
    let obj = {};
    for (count of arr){
         obj[arr[count]] = (obj[count]||0) +1;
    }
    return obj;
  }
console.log( toObject([1,1,2,3,2]))


let testScores = [20,30,60,78,59,78,87,90,33,22]
function tes(testScores){
    let scores =testScores.filter((over)=> over >= 70)
    return scores
}
console.log(tes(testScores))



function fivePoint(increase){
    let scores =increase.map((addFive)=> addFive +5)
    return scores
}

console.log(fivePoint([20,30,60,78,59,78,87,90,33,22]))

function sqaureOf(findSquare){
    let scores = findSquare.map((sqaure)=> sqaure * sqaure )
    return scores
}

console.log(sqaureOf([2,3,4,5]))

function distrubition(people){
    let  book ={}
    let books =["aja lekoko","tom and jerry", "lips","goat"  ]
    for( i in people){
       book[people[i]] = books[i]
    }
   
    return book;
}

console.log( distrubition(["emily", "jack", "sophia", "Daniel"]))


let time = ["9:00AM","11:00AM","1:00PM", "3:00PM", "5:00PM"]
function checkTime(time){

    let day =time.filter((over)=> over.includes("PM"))
    return day
}
console.log( checkTime(time))

let  categories ={
    "grocceries": 150,
    "dinning out":100,
    "tranportation":50,
    "entertainment":80
}
function expenses(categories){
    let = count = 0
    for( i in categories){
     count+=categories[i]

    }
   
    return count;
}
console.log(expenses(categories))
// function tObject(arr) {
//     let obj = {
        
//     };
//     for (let number = 0; number < arr.length; arr++)
//         {
//          if(obj[number] in arr[number] ){
//             obj[arr[number]]+1;
//          }else{
//             obj[arr[number]] =2;
//          }
//     }
//     return obj;
//   }
// console.log( tObject([1,1,2,3,2]))



module.exports = {addEverytwoNumbers, getFruitLength, maparr,toObject,tes }


// const invetry = [
//     {name: "apples"},
//     {name: "orange"},
//     {name: "mango"}
// ]
// console.log(invetry.find((invetry)=> invetry.name === "mango"))

//console.log(filtered)
//console.log(fruit)