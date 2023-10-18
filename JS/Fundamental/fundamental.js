console.log('Chaliye shuru karte hai');

//object create

let rectangle = {
    length: 1,
    breadth: 2,

    draw: function () {
        console.log('drawing rectangle')
    }
};

//factory function->notation: numberOfStudent [camelcase]

function createRectangle(len,bre) {
    return rectangle ={
        length : len,
        breadth : bre,

        draw() {
            console.log('drawing rectangle');
        }
    };
}
rectangle.draw();

let rectangleObj1 = createRectangle(5,4);

//constructor function -> NumberOfStudent [Pascal notation] 
//constructor function is method in which function is initialised
//constructor function -> prop/methods -> initialise/Define
function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw= function () {
        console.log('drawing')
    }
}

//object creation using constructor function
let rectangleObject = new Rectangle(3,2);
//creation of object
rectangleObject.color = 'yelllow';
//delete that function
delete rectangleObject.draw;