import Axios from 'axios'
import React, { useState } from 'react'
import MapItem from '../information/MapItem'

const ResultListItem  = (props) => {
  const {poi} = props;

  const [hover, setHover] = useState(false)


  const selected = (poi) => {
    Axios.post('/information', {poi: poi})
    .then((information) => {
      props.setPOI(poi)
      props.setInformation(information.data)
      props.display('INFORMATION')
    })
  }
  
  return (
    <li  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onDoubleClick={()=> selected(poi)} className="ResultListItem">
      <h2>{poi.display_name}</h2>
      {hover && <MapItem name={poi.display_name} lat={poi.lat} lon={poi.lon}/>}
    </li>
  )
}

export default ResultListItem;