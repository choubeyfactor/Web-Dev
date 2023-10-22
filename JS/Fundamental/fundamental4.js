let message = 'This is my first message';

let words = message.split(' ');
console.log(words); // ['This', 'is', 'my', 'first', 'message']

//-----------Template Literal-------------// (A better option for escape sequence)

let date = new Date('June 20 1998 07:15');
console.log(date);
date.setFullYear('2003');
console.log(date);

//-------------Arrays------------------//


let numbers = [1,4,5,7];
console.log(numbers);
numbers.push(9);//add in last
console.log(numbers);
numbers.unshift(8);//add in first
console.log(numbers);
numbers.splice(2,0,'a','b','c');//adding in middle
console.log(numbers);

//finding the index
console.log(numbers.indexOf(4));

//checking if number is in array or not
if (numbers.indexOf(4) != -1) {
    console.log("present");
}

console.log(numbers.includes(7)); //boolean type -> returns True/False

console.log(numbers.indexOf(4,2)); //will search for number 4 after 2nd index

let courses = [
    {no:1 , naam:'Love'},
    {no:2 , naam:'Hate'}
];
console.log(courses);
console.log(courses.indexOf({no:1 , naam:'Love'}));

//creating a function
let course = courses.find(function(course){
    return course.naam === "Love";
})
console.log(course); //calling the function

let numbers1 = numbers; // copied whole address of number to number1
numbers= []; //emptying an array directy but number1 will still hold the value

//for complete deletion or emptying
numbers.length = 0;


let first = [1,2,3,4];
let second = [4,5,6];
//combining two arrays
let combined = first.concat(second);
//slicing array
let slice = combined.slice(2,4); //now it will give the sliced off ans from 2nd to 3rd index
//combining using spread operator
let combine = [...first, ...second];
//copying using spread operator
let copy = [...combined];




let arr0 = [10,20,30,40,50];

//iterating an array through for-each loop
arr0.forEach((value)=>{console.log(value)});
//iterating an array through for-of loop
for(let i of arr0){
    console.log(i)};

//joining an array
let joinArray = arr0.join(',');

//spliiting a message on basus of space
let message1 =' My name is ziaa';
let parts = message1.split(' '); 

//sorting
let sortArr = arr0.sort(); //ascending order
let reverseSort = arr0.reverse(); //descending order
