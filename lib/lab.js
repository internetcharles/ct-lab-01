

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => {
    let newArr = arr;
    newArr.push(newItem);
    return newArr;
}

module.exports = {
    getName,
    copyAndPush
};