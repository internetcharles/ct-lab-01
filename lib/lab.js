

const getName = (obj) => obj['name'];

const copyAndPush = (arr, newItem) => {
    arr.push(newItem);
    return arr;
}

module.exports = {
    getName,
    copyAndPush
};