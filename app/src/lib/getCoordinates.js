const axios = require('axios');
const mountainTypes = 'volcano peak';
const trailTypes = 'track path footway';

// helper to filter for the coordinates and name of interest when searching
const filterData = (results, typeString) => {
  const filtered = results.filter((result) => typeString.includes(result.type)).map((location) => {
    const display_name = location.display_name.split(',').slice(0,3)
    return {display_name, lat: Number(location.lat), lon: Number(location.lon)}
  })
  return filtered;
}

const getMountainCoordinates = (peakName) => {
  return axios.get(`https://nominatim.openstreetmap.org/search.php?q=${peakName}%20in%20british%20columbia&polygon_geojson=1&format=jsonv2`)
  // filter peaks with type of 'volcano' and 'peak' then extract information
  .then((results) => filterData(results.data, mountainTypes))
}

const getTrailCoordinates = (trailName) => {
  // add 'trail' to search if it doesn't have it included to refine search
  const regex = /[tT]rail/g;
  if (trailName && !regex.test(trailName)) {
    trailName = trailName.trim() +" Trail"
  }

  return axios.get(`https://nominatim.openstreetmap.org/search.php?q=${trailName}%20in%20british%20columbia&polygon_geojson=1&format=jsonv2`)
  .then((results) => filterData(results.data, trailTypes))
}

module.exports = {
  getMountainCoordinates,
  getTrailCoordinates
}