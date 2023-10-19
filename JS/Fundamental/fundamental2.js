let a = 10;
//creating a primitive function
function inc(a){
    a++; 
//here the increament is done but not on the original value but the copy made by the primitive value
}//paas by value concept
inc(a); //calling the fuunction
console.log(a);


//reference type

let b = {value:10};
inc(b);
console.log(b);
//here we can see the increament on the original value as it works direct on the adrress of value

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop
for (let key in rectangle) {
    //kets are reflected through key variable
    //values re reflected through rectangle[key]
    console.log(key, rectangle[key]);
}
//for-of loop-. they are only used on iterables

//by below method only keys are printed
for (let key of Object.keys(rectangle)) {
    console.log(key);
}
//by using the below method entire key values are printed
for (let key of Object.entries(rectangle)) {
    console.log(key);
}

//check msg

if ('color' in rectangle) {
    console.log('Present');
}
else{
    console.log('Absent');
}

//------------------------cloning------------------------------


//Through iteration
let src={
    a:10,
    b:20,
    c:30
};
let dest = {};

for (let key in srcc){
    dest[key] = src[key];
}
console.log(dest);


//Through assign method
let src2 = {
    a:10,
    b:20,
    c:30
};

let dest2 = Object.assign({}, src2);
console.log(dest2);
src2.a++;//checking if we change the value of the source then we get any effect on destination
console.log(dest2);

//Through spread method
let src3 = {
    a:10,
    b:20,
    c:30
};
let dest3 = {...src3};
console.log(dest3);
src3.a++; //checking if we change the value of the source then we get any effect on destination
console.log(dest3);