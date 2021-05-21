const axios = require('axios');
const mountainTypes = 'volcano peak';
const trailTypes = 'track path footway';

// helper to filter for the coordinates and name of interest when searching
const filterData = (results, typeString) => {
  const filtered = results.filter((result) => typeString.includes(result.type))
  .map((location) => {
    // display_name key is from api
    const resultName = location.display_name.split(', British Columbia,')[0].split(',')
    const name = resultName[0]
    const region = resultName[resultName.length - 1]
    return {name, region, lat: Number(location.lat), lon: Number(location.lon)}
  })
  return filtered;
}

const getMountainCoordinates = (peakName) => {
  return axios.get(`https://nominatim.openstreetmap.org/search.php?q=${peakName}%2C+british%20columbia&polygon_geojson=1&format=jsonv2`)
  // filter peaks with type of 'volcano' and 'peak' then extract information
  .then((results) => filterData(results.data, mountainTypes))
}

const getTrailCoordinates = (trailName) => {
  return axios.get(`https://nominatim.openstreetmap.org/search.php?q=${trailName}%2C+british%20columbia&polygon_geojson=1&format=jsonv2`)
  .then((results) => filterData(results.data, trailTypes))
}

module.exports = {
  getMountainCoordinates,
  getTrailCoordinates
}