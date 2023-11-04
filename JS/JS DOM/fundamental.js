

document.addEventListener('click' , function() {
    console.log('I have clicked on the document')
})

const consent = document.querySelector('wrapper');
consent.addEventListener('click' , function(event){
    console.log(event);
})

let links = document.querySelectorAll('a');
let thirdLink = link[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aya, achha laga');
});