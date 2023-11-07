 let meraPromise = new Promise(function(resolve,reject){
    console.log('I am inside promise');
    resolve(1998)
 });
 console.log('pehla');



 let meraPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log('I am inside promise1');
  }, 5000);
  resolve(123);
 });

 meraPromise1.then((value) => {console.log(value)});



 let meraPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log('I am inside promise1');
  }, 5000);
  reject(new Error('Bhaisaab Error aaya hai'))
 });

 meraPromise2.catch((error) => {console.log(error)});


 let waad1 = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log('setimeout1 started');
    }, 2000);
    resolve(true);
 })
 let output = waada1.then(() => {
    let waada2 = new Promise(function(resolve , reject){
        resolve("waada 2 resolved");
    },3000);
    return waada2 ;
 })
 output.then((value) => console.log(value));