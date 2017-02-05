/**
 * Created by Filip on 08.01.2017.
 */
const print = (...args) => console.log(args[0].toUpperCase() + ": " + args[1]);

function main() {
    //arraysExample();
    //objectsExample();
    objectPropertyExample();
}


function objectPropertyExample() {
    var child = {
        name : 'Pepa',
        height : 36,

        get socialSecurity() {
            return 5555555555;
        },
        get toString() {
            return this.name + ' is ' + this.feetTall + ' feet tall';
        },
        get feetTall() {
            return this.height/12;
        },
        set feetTall(x) {
            this.height = x*12;
            return this.height;
        }
    }

    print("objectPropertyExample1", child.toString);
    child.feetTall = 5;
    print("objectPropertyExample2", child.toString);
    print("objectPropertyExample2", child.height);
}

function objectsExample() {
    //Creating object ball with property round
    ball = {round : true};
    //Creating an object basketball, that photogenically inherits from ball
    basketball = Object.create(ball);

    //OBJECTSEXAMPLE: round
    for(x in basketball) {
        print("objectsExample",x)
    }

    //OBJECTSEXAMPLE: round: true
    //get property value
    for(x in basketball) {
        print("objectsExample",x +": " + basketball[x])
    }

    print("objectsExample",ball.hasOwnProperty("round"));
    print("objectsExample",basketball.hasOwnProperty("round"));
}

function arraysExample() {
    var aTest = ['nula', 'jedna', 'dva', 'tri'];
    aTest.map(function (item, index) {
        print(item,index);
    });
}

main();