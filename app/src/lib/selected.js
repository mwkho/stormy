import axios from 'axios';

const selected = (poi, setPOI, setInformation, display, setPlaceId) => {
  display('LOADING')
  axios.post('/information', {poi: poi})
  .then((information) => {
    setInformation(information.data)
    setPOI(poi)
    return axios.get(`get/place/${poi.lat}/${poi.lon}`)
  })
  .then(res => {
    setPlaceId(res.data.rows[0].id)
    display('INFORMATION')
  })
  .then()
}

export default selected
