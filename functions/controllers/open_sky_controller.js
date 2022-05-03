var request = require("request");
var stateResponse = require("../util/constant");

const url = 
  "https://user:pw@opensky-network.org/api/states/all?lamin=35.9025&lomin=25.90902&lamax=42.02683&lomax=44.5742";
const flightStates = onComplete => {
  request(url, function(error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    var stateArray = JSON.parse(body).states;
    console.log(stateArray);
    const stateArrayToMapList = stateArray.map(item => {
      var propStore = {
        country  : item[stateResponse.origin_country],
        latitude : item[stateResponse.latitude],
        longitude: item[stateResponse.longitude],
        ico24    : item[stateResponse.icao24]
      };
      return propStore;
    });
    onComplete(stateArrayToMapList);
  });
};

module.exports = { flightStates };
