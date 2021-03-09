const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);


    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        //spy();
        //expect(spy).toHaveBeenCalled();
        spy('Stalin', 27);
        expect(spy).toHaveBeenCalledWith('Stalin', 27);
    });

    it('should call saveUser with user objec', () => {
        var email = 'stalin@example.com';
        var password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});