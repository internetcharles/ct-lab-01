const { getName, copyAndPush, capitalizeAndFilter, fetchQuote } = require('./lab');
const fetch = require('node-fetch');

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
        expect(numbers)
            .toEqual([1, 2, 3]);
    });
});

const arrayOfStrings = ['friend', 'table', 'chair', 'chalice', 'food'];

describe('capitalizes all strings and filters out any straing that starts with f', () => {
    it('capitalizes and filters out f', () => {
        const capitalizedAndFiltered = capitalizeAndFilter(arrayOfStrings);

        expect(capitalizedAndFiltered)
            .toEqual(['TABLE', 'CHAIR', 'CHALICE']);
    });
});


describe('returns a single quote from the futurama api', () => {
    it('returns the first quote with correct keys', async () => {
        const firstQuote = await fetchQuote();

        expect(firstQuote)
            .toEqual({
                name: expect.any(String),
                text: expect.any(String),
                image: expect.any(String)
                });
    });
});
