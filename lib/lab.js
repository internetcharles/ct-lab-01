const { default: fetch } = require("node-fetch");


const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => newArr = [...arr, newItem];

const capitalizeAndFilter = (arr) => arr.filter(string => string.charAt(0) != 'f').map(string => string.toUpperCase());

const fetchQuote = async () => {
    const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes')
    const [ { image, character: name, quote: text } ] = await response.json();
    return {
        image,
        name,
        text
    }
}




module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter,
    fetchQuote
};