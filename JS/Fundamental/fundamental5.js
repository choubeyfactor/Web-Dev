//-------------Filtering Array------------------------

 let array = [1, 2, 3, 4, 5];
 function filterArray(array) {
       return array.filter((value) => value > 2);
     }

let array1 = [-2,-1,0,1,2,3];
let filtered = array1.filter(function(value){
    return value >=0;
});

//---------------------------Mapping Array-------------

let mapArray = (arr)=>{
    return arr.map(x=> x*2);
    }

//-------------------------mapping with objects---------
let objArr=[{name:'John',age:28},{name:'Jane',age:30}]
let newObj=objArr.map(person=>({...person,age: person.age+1}))
console.log(newObj);
//-----------------------reduce method in arrays-----
let reduceArray=(arr)=>arr.reduce((accumulator,currentValue)=> accumulator + currentValue ,0 )
console.log(reduceArray([1,2,3]));
