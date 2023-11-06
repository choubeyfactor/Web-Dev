const content = document.querySelector('#wrapper');

content.addEventListener('click' , function(event) {
    console.log(event);
})

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click' , function (event) {
    event.preventDefault();
    console.log('maza aaya , achha laga ');
})

let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('Para' + event.target.textContent);
}
myDiv.addEventListener('click' , paraStatus);
for(let i=1 , i<=100 ; i++){
    let newElement = document.createImageBitmap('p');
    newElement.textContent = 'This is para ' + i;

newElement.addEventListener('click' , funtion(event2){
    console.log("I have clicked on para");
});
myDiv.appendChild(newElement);
}
document.appendChild(myDiv);