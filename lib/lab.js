

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => newArr = [...arr, newItem];

const capitalizeAndFilter = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] != 'f') {
            newArr.push(arr[i].toUpperCase())
        }
    }
    return newArr;
}


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
};