async function utility (){

let maharashtraMausam = new Promise((resolve , reject) => {
    setTimeout(()=>{ 
        resolve("Delhi me bahut garmi hai");
    },1000);
});

let hydMausam = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hyd Mausam is good");
    },2000);
});

let dM = maharashtraMausam;
let hM = hydMausam;

return[dM,hM];
}