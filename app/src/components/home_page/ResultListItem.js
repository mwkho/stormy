import Axios from 'axios'
import React, { useState } from 'react'
import MapItem from '../information/MapItem'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Tooltip from '@material-ui/core/Tooltip'
import Container from '@material-ui/core/Container'
import MapIcon from '@material-ui/icons/Map';
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close'

const ResultListItem  = (props) => {
  const {poi, type, setPlaceId} = props;
  const [hover, setHover] = useState(false)
  const [freeze, setFreeze] = useState(false)
  

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

  const close =(
    <Tooltip title="Close" arrow placement="right">
    <Button 
      style={{backgroundColor: 'white',}}
      onClick={() => { setFreeze(false); setHover(false)}}
      >
        <CloseIcon />
      </Button>
    </Tooltip>
   )

  const mapButton = (<Tooltip title="Freeze the map" arrow placement="right">
  <Button
  style={{backgroundColor: 'white',}}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => !freeze && setHover(false)}
  onClick={(() => setFreeze(true))}
  >
    <MapIcon></MapIcon>
  </Button>
  </Tooltip>)

  const map = ( 
  <Container
    style={{width: '500px', height: '400px'}}
  >
    <MapItem lat={poi.lat} lon={poi.lon}/>
  </Container>
      
  
  )
  
  
  return (
    <>
    <ButtonGroup>
    
    <Button
    onClick={()=> selected(poi)}
    style={{backgroundColor: 'white', width: '800px'}}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => !freeze && setHover(false) }
    
    //onMouseLeave={() => setHover(false)}
    >
       {poi.name} <br></br>   Region: {poi.region}
    </Button>
    {freeze ? close : mapButton }
    
    </ButtonGroup>
    {hover && map}
    </>
    
  )
}

export default ResultListItem;


/*<li  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onDoubleClick={()=> selected(poi)} className="ResultListItem">
      <h2>Name: {poi.name}</h2>
      <h3>Region: {poi.region}</h3> 
      {hover && <MapItem lat={poi.lat} lon={poi.lon}/>}
    </li>*/