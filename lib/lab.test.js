const { getName } = require('./lab');

const spot = { name: 'spot', age: 5, weight: '20 lbs' }

describe('get name property from object', () => {
    it('gets name property within object', () => {
        const name = getName(spot)

        expect(name)
            .toEqual('spot');
    });
});