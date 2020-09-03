

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => newArr = [...arr, newItem];

const capitalizeAndFilter = (arr) => arr.filter(string => string.charAt(0) != 'f').map(string => string.toUpperCase());

const fetchQuote = async () => {
    const futuramaData = await fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())

    firstQuote = futuramaData.body.results;
    console.log(firstQuote);
}




module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter
};