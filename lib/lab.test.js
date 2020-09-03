const { getName, copyAndPush } = require('./lab');

const spot = { name: 'spot', age: 5, weight: '20 lbs' }

describe('get name property from object', () => {
    it('gets name property within object', () => {
        const name = getName(spot)

        expect(name)
            .toEqual('spot');
    });
});

const numbers = [1, 2, 3];

describe('returns a new array with a new item pushed in', () => {
    it('pushes new item into array', () => {
        const newArray = copyAndPush(numbers, 4)

        expect(newArray)
            .toEqual([1, 2, 3, 4]);
    });
});