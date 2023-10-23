//------------------Function-----------------------------

function run(){
    console.log('running');
 }
 run(); //calling or envoking a function


          //other function example

          greet(name); //his os called function hoisting

     function greet(name) {
        console.log(`Hello, ${name}!`);
      }
      let name = "Mayank";
    
//-------------------function assignment----------------
      const addNumbers = (a, b) =>{
        return a + b;
        };
        console.log(addNumbers(5, 10));


function sum(a,b) { 
    let total = 0;
    for(let value of arguments){ //making this function dynamic
        total +=value;
    }
    return total;
}

let ans = sum(1,2,3,4,5,6);
console.log(ans);

//-------------------Rest Operator-----------------------
const numbers = [1, 2, 3];
numbers[Symbol.isConcatSpreadable] = false;
const result = [...numbers];
console.log(result);

//----------------Try and Catch--------------------------
try {
    throw new Error("An error occurred");
    } catch (error) {
        console.log(error);
        } finally {
            console.log("This is the end!");
                        
}