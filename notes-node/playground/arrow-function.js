var square = (x) => {
    var result = x * x;
    return result;    
}

var squareAlt = (x) => x*x;
var squareAlt2 = x => x*x;

console.log(square(9));
console.log(squareAlt(9));
console.log(squareAlt2(9));

var person = {
    name: 'Stalin',
    // when using arrow-functions, you can't access to arguments array and this keyword
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi ${this.name}!`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi ${this.name}!`);
    }
}

person.sayHi(1, 2, 3);
person.sayHiAlt(1, 2, 3);

