

const fetch = require('node-fetch');

const url = 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0638c081b4mshb4baae8fae5dc20p1e04bdjsn9efecf50957b',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}