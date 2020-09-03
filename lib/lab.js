

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => {
    let newArr = [...arr, newItem]
    return newArr;
}

module.exports = {
    getName,
    copyAndPush
};