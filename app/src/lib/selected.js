import axios from 'axios';

const selected = (poi, setPOI, setInformation, display ) => {
  axios.post('/information', {poi: poi})
  .then((information) => {
    setPOI(poi)
    setInformation(information.data)
    display('INFORMATION')
  })
}

export default selected
