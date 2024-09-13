const {sumEvenNumbers, findMax,findFirstDuplicate,reverseArray,factorial,palindrome}= require("./function.js")

test("Sum all even numbers", ()=>{
let total = [1,2,3,4,5,6,7,8,9,10];
let result = sumEvenNumbers( total );
expect(result).toBe(30);
})

test("find the highest in the arrays", ()=>{
let highest = [1,2,3,40,5,6,7,8,9,10];
let result = findMax( highest );
expect(result).toBe(40);
})

test("find the duplicate in the arrays", ()=>{
let duplicate = [1,2,3,4,4,5,6,7,8,9,10];
let result = findFirstDuplicate( duplicate );
expect(result).toBe(4);
})

test("find the duplicate in the arrays", ()=>{
let duplicate = [1,2,1,2];
let result = findFirstDuplicate(duplicate );

expect(result).toBe(1);
})

test("find the duplicate in the arrays", ()=>{
let duplicate = [1,2,2];
let result = findFirstDuplicate(duplicate );
expect(result).toBe(2);
})

test("find the duplicate in the arrays", ()=>{
let duplicate = [1,2,2,1];
let result = findFirstDuplicate(duplicate );
expect(result).toBe(2);
})

test("find the duplicate in the arrays", ()=>{
let duplicate = [1,2,3,5,5];
let result = findFirstDuplicate(duplicate );
expect(result).toBe(5);
})


test("find the duplicate in the arrays", ()=>{
let duplicate = [1,2,3,5];
let result = findFirstDuplicate(duplicate );
expect(result).toBe(-1);
})



test("reverse the arrays", ()=>{
let arr = [1,2,3,4,5,6,7,8,9,10];
let result = reverseArray(arr );
expect(result).toEqual([10,9,8,7,6,5,4,3,2,1]);
})

test("return factorial of the number", ()=>{
let numbers = 5;
let result = factorial(numbers);
expect(result).toBe(120);
})




