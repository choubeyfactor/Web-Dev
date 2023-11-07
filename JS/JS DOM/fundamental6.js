for(let i =1 ; i<= 100 ; i++ ){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    document.body.appendChild(newElement);
}

let fragment = document.createDocumentFragment();
for(let i =1 ; i <= 100 ; i++) {
    let newElement = document.createElement('div');

    let newElement = document.createElement('p');
    newElement.textContent = `This is para ' + i;

    fragament.appendChild(newElement);
}
document.body.appendChild(fragment); 