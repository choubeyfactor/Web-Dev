function sync(){
    console.log('first');
}
sync();
console.log('second');

//----------------------Asynchronous code---------------------//
setTimeout(function(){
    console.log('third');
},3000)
function sync(){ //synchronous part of the code
    console.lof('first');
};
sync();
console.log('second');