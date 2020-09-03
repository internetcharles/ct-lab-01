

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => newArr = [...arr, newItem];

const capitalizeAndFilter = (arr) => {
    let newArr = arr.filter(string => string.charAt(0) != 'f')
    let capitalizedArray = [];
    newArr.forEach(string => { capitalizedArray.push(string.toUpperCase())});
    return capitalizedArray;
}


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
};