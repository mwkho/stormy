import React, { useState } from 'react';
import SidebarElement from './SidebarElement';
import '../styles/SideNav.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Logo from '../home_page/Logo'
import Slide from '@material-ui/core/Slide';






export default function Sidebar(props) {
  const {setPage, setFavourites}=props
  const [navbar, setNavbar] = useState(false)

  /*function ButtonStyled(){
    const useStyles = makeStyles({
      root: {
        color: 'white',
        backgroundColor: '#111',
        width: '20px'
      }
    })
    const classes = useStyles();
  
    return <Button 
    className={classes.root}
    //style={{width: '2px'}}
    size="small"
    color="black"
    variant="contained"
    onClick={closeNav}
    >
      {closeIcon}
    </Button>
  
  }
  */

// get favourites when clicked on favourites and show loading page
const getFavourites = function(){
  setPage('LOADING')
  axios.get('/get/favourites')
  .then((results) => {
    setFavourites(results.data.rows)
    setTimeout(() => setPage('FAVOURITES'), 500)
  })
}

function openNav() {
  setNavbar(true)
}

function closeNav() {
  setNavbar(false)
}

const NavBar = (
<Box className="sidenav">
<Grid container
  display='flex'
  flexDirection="row"
  justify="flex-start"
  >
  <Grid item>
    <IconButton     
      style={{ color: 'white'}}
      size="medium"
      edge='start'
      onClick={closeNav}
    >
      <CloseIcon />
    </IconButton>
  </Grid>  
</Grid>


<Grid 
  container 
  spacing={4}
  display='flex'
  flexDirection='column'
  justify='center'

  >
<Grid item>
<Button
  size='large'
  onClick={() => setPage('HOME')}
  style={{backgroundColor: 'white', width: '140px'}}
  color='white'
>
  Egg Eggerson
  <AccountCircleIcon />
</Button>
</Grid>
<Grid item>
<Button
  size='large'
  onClick={() => setPage('HOME')}
  style={{backgroundColor: 'white', width: '140px'}}
  color='white'
>
  Home
  <HomeIcon />
</Button>
</Grid>
<Grid item>
<Button
  size='large'
  onClick={getFavourites}
  style={{backgroundColor: 'white', width: '140px'}}
  color='white'
>
  Favourites
  <FavoriteIcon />
</Button>
</Grid>
<Grid
  item
  container
  direction="column"
  justify="flex-end"
  alignItems="baseline"
>


<Logo width={160}/>

</Grid>

</Grid>


{/* </div> */}
</Box>
)

const menuButton = (
<Grid 
  container
  style={{position:'sticky', top:'0'}}
  >
  <Grid 
    item
    style={{position:'sticky', top:'0'}}

  >
    <Button 
      style={{position:'sticky', top:'0'}}
      size="large"
      onClick={openNav}
      variant='outline'
    >
      <MenuIcon />
    </Button>
  </Grid>
</Grid>
)

  return(
    <>
    <Slide direction="right" in={navbar} mountOnEnter unmountOnExit>
      {NavBar}
    </Slide>

    {!navbar && menuButton}
     
    
    </>
  )

};


//<SidebarElement image="../../../Images/home.png" text="Home" onClick={() => setPage('HOME')}/>
//<SidebarElement image="../../../Images/profile_pic.png" text="Egg Eggerson" onClick={() => 'hi'} />
//<SidebarElement image="../../../Images/heart.png" text="Favourites" onClick={getFavourites}/>