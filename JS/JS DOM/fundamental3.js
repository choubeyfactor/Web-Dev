let element = document.querySelector('#wrapper');

element.addEventListener('click', function(e) {
    if(e.target.nodeName === 'SPAN'){
    console.log("Clicked" + e.target.textContent );
    }
})