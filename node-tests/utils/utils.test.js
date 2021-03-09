const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    /*
    if (res != 44) {
        throw new Error(`Expected 44, but got ${res}.`);
    }
    */    
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
    /*
    if (res !== 9) {
        throw new Error(`Expected 44, but got ${res}.`);
    }
    */
});

it ('should async square a number', (done) => {
    utils.asyncSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
    });
});

/*
it('should expect some values', () => {
    //expect(12).toNotBe(11);
    //expect({name: 'Stalin'}).toBe({name: 'Stalin'}); // Error!
    //expect({name: 'Stalin'}).toEqual({name: 'Stalin'}); // toNotEqual
    //expect([2, 3, 4]).toInclude(2); // toExclude
    expect({
        name: 'Stalin',
        age: 27,
        location: 'Ecuador'
    }).toExclude({
        age: 23
    });
});
*/

it ('should set firstName and lastName', () => {
    var user = {age: 27, location: 'Ecuador'}
    var res = utils.setName(user, 'Stalin Amagua');
    //expect(user).toEqual(res); // objects are passed by reference
    
    expect(res).toInclude({
        firstName: 'Stalin',
        lastName: 'Amagua'
    });    
});