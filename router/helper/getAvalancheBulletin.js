const axios = require('axios');
const pointInPolygonNested = require('point-in-polygon/nested')

// helper to flip coordinates in avalanche forecast api call
const flipCoordinate = (coords) =>  {
  return [coords[1], coords[0]]
}

// helper to find which region, the poi resides in for avalanche bulletins
const findRegion = (poiCoordinates) => {
  return axios.get(`https://www.avalanche.ca/api/forecasts/`)
  .then((res) => {
    let found;
    for (let region of res.data.features) {
      const geometry = region.geometry;
      // only check for regions not a point location
      if (geometry.type.includes('Polygon')) {
        let coordinates = geometry.coordinates;

          // south coast has two parts, need to combine these two parts as one
        if (region.id === 'south-coast') {
          const coordinatesSunshine = coordinates[0][0];
          const coordinatesMainland = coordinates[1][0];
          coordinates = [[...coordinatesMainland, ...coordinatesSunshine]]
        }

        // [y,x] => [x,y], a reflection on  the y=x line
        // will need check to if changing the poi coordinate will work by iteslf 
        const switched = coordinates[0].map((coordinate) => flipCoordinate(coordinate))
        if (pointInPolygonNested(poiCoordinates, switched)) {
          found = region.id;
          break;
        }
      }
    }
    return found;
  })
}

//getting bulletin after getting region
const getBulletin = (coordinates) => {
  return findRegion(coordinates)
  // api call to grab the region speciic avalanche bulletin
  .then((region) => axios.get(`https://www.avalanche.ca/api/forecasts/${region}.json`))
  .then((res) => {
    const data = res.data;
    const {dateIssued, validUntil, highlights, avalancheSummary, snowpackSummary, dangerRatings, problems} = data
    return {dateIssued, validUntil, highlights, avalancheSummary, snowpackSummary, dangerRatings, problems}
  })
  // catch error for unfound region
  .catch(() => 'The trail/mountain does not belong to a region with an avalanche bulletin')
}

module.exports = getBulletin