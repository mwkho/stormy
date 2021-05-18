import Axios from 'axios'
import React, { useState } from 'react'
import MapItem from '../information/MapItem'

const ResultListItem  = (props) => {
  const {poi, type, setPlaceId} = props;
  const [hover, setHover] = useState(false)

  const selected = (poi) => {
    props.display('LOADING')
    Axios.post('/information', {poi: poi})
    .then((information) => {      
      props.setPOI({...poi, type: type})
      props.setInformation(information.data)
      return Axios.post(`/add/place`, { lat: poi.lat, lon: poi.lon, type, name: poi.name, region: poi.region})
    })
    // set placeId when the result is selected
    .then( () => Axios.get(`get/place/${poi.lat}/${poi.lon}`))
    .then(res => {
      setPlaceId(res.data.rows[0].id)
    })
    .then(
    setTimeout(() => {
      props.display('INFORMATION')
    }, 1000)
    )
  }
  
  return (
    <li  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onDoubleClick={()=> selected(poi)} className="ResultListItem">
      <h2>Name: {poi.name}</h2>
      <h3>Region: {poi.region}</h3> 
      {hover && <MapItem lat={poi.lat} lon={poi.lon}/>}
    </li>
  )
}

export default ResultListItem;