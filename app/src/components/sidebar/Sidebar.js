import React, { useState } from 'react';
import SidebarElement from './SidebarElement';
import '../styles/SideNav.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Logo from '../home_page/Logo'






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
  document.getElementById("mySidenav").style.width = "160px";
  setNavbar(false)
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setNavbar(true)
}

const closeIcon = <CloseIcon />
const openIcon = <MenuOpenIcon />
const showNavBar = (<div id="mySidenav" className="sidenav">
  
<Grid container>
<Grid item
  direction="row"
  justify="flex-end"
  >
  <Button 
    
    style={{backgroundColor: '#111', color: 'white'}}
    size="small"
    color="black"
    variant="contained"
    onClick={closeNav}
    >
      {closeIcon}
    </Button>
  </Grid>

  
</Grid>


<Grid container spacing={4}>
<Grid item>
<Button
  size='large'
  onClick={() => setPage('HOME')}
  style={{backgroundColor: 'white', width: '160px'}}
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
  style={{backgroundColor: 'white', width: '160px'}}
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
  style={{backgroundColor: 'white', width: '160px'}}
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
<Logo
width={160}
>

</Logo>
</Grid>

</Grid>


</div>)

const menuButton = (
<Grid container>
  <Grid item>
    <Button 
    size="small"
    color="black"
    variant="contained"
    onClick={openNav}
    >
      {openIcon}
    </Button>
  </Grid>
</Grid>
)

  return(
    <>
    {showNavBar}

    {navbar ? menuButton : null}
     
    
    </>
  )

};


//<SidebarElement image="../../../Images/home.png" text="Home" onClick={() => setPage('HOME')}/>
//<SidebarElement image="../../../Images/profile_pic.png" text="Egg Eggerson" onClick={() => 'hi'} />
//<SidebarElement image="../../../Images/heart.png" text="Favourites" onClick={getFavourites}/>