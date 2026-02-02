/*const axios = require('axios')

module.exports = async (phrase) => {
  const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      format: 'json',
      q: '${phrase}'
    }
  })


  ///
  //TODO: return a formattedObj
  var formattedObj = {
    data: results.data,
    status: results.status,
    statusText: results.statusText,
    headers: results.headers,
    requestHeader: results.config.headers
  }

  //TODO: return the formattedObject
  return JSON.stringify(formattedObj);
} */

const axios = require('axios');

module.exports = async (phrase) => {
    try {
        // Fix 1: Using Open Library URL to avoid the 429 error
        const results = await axios.get(`https://openlibrary.org/search.json?title=${phrase}`);

        var formattedObj = {
            data: results.data,
            status: results.status,
            statusText: results.statusText,
            headers: results.headers,
            requestHeader: results.config.headers
        };

        // Fix 2: Return the object itself, not a stringified version
        return formattedObj; 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
