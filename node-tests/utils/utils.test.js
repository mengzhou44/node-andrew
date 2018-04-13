const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {

    it('should add two numbers', () => {
        const result = utils.add(3, 4);

        expect(result).toBeA('number').toBe(7);

    });

    it('should add two numbers asynchronously', (done) => {
        utils.addAsync(3, 4, (sum) => {
            expect(sum).toBeA('number').toBe(7);
            done();
        });

    });


    it('should square a number', () => {
        const result = utils.square(9);
        expect(result).toBe(81);
    })


    it('should square number asynchronously', (done) => {
        utils.squareAsync(9, (result) => {
            expect(result).toBeA('number').toBe(81);
            done();
        });

    });



    it('should set name', () => {
        const user = {};
        utils.setName(user, 'daniel zhou');
        expect(user).toInclude({ firstName: 'daniel', lastName: 'zhou' });
    })

})
