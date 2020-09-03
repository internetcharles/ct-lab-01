

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => newArr = [...arr, newItem];

const capitalizeAndFilter = (arr) => arr.filter(string => string.charAt(0) != 'f').map(string => string.toUpperCase());


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
};