function sumEvenNumbers(even){
let sum = 0

for(let number in even){
if (even[number] %2== 0){
sum += even[number]

}
}

return sum;

}

function findMax(numbers){
let sum = numbers[0];

for(number in numbers){
if (numbers[number] > sum){
sum = numbers[number]

}
}

return sum;

}


function findFirstDuplicate(numbers){
let toReturn= -1;

for(let count = 0; count < numbers.length; count++){
for(let counter = 0; counter < numbers[count-1]; counter++){

if(numbers[count] === numbers[counter] ){

return numbers[count];
}


}


}

return toReturn


}

function reverseArray(arr){
let reverse = [];
for(let count = arr.length-1; count >=0 ; count--){

reverse.push(arr[count]);
}

return reverse;
}

function factorial(numbers){
let fact = 1
for(let count = 0 ; count <numbers ; numbers--){

fact*=numbers
}

return fact;
}






module.exports = {sumEvenNumbers,findMax,findFirstDuplicate,reverseArray,factorial};

