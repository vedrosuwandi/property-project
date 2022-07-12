import * as React from 'react';
import {useState} from 'react';
import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import NavbarMenu from '../Menu/NavbarMenu'

import './Navbar.css'

/* Toolbar */
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'black',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
}));

/* Search */
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        height:'5%',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

/* Language */
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  }));
  

export default function Navbar() {
  const [Buy, setBuy] = useState(null)
  const openBuy = Boolean(Buy);
  const openBuyMenu = (event)=>{
    setBuy(event.currentTarget)
  }
  const closeBuyMenu = () =>{
    setBuy(false)
  }

  const [Rent, setRent] = useState(null)
  const openRent = Boolean(Rent);
  const openRentMenu = (event)=>{
    setRent(event.currentTarget)
  }
  const closeRentMenu = () =>{
    setRent(false)
  }


  return (
    <Box sx={{ flexGrow: 1 , position:'sticky', top:'0'}}>
      <AppBar position="static">
        <StyledToolbar>
          <div className="nav-left">
            <div className="nav-logo">
              <h2>LOGO</h2>
            </div>
          </div>
            <div className='nav-right'>
              <div className="nav-right-top">
                <Search>
                  
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Button size="large" aria-label="search" color="inherit">
                    <SearchIcon />
                </Button>
                <Box
                    sx={{
                        p: 1.2,
                        display: 'flex',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                      }} 
                >
                    <Item sx={{backgroundColor:'transparent'}}>
                        <a>
                            <span style={{paddingRight:'10px', color:'white'}}>ENG</span>
                        </a>
                        <span style={{color:'white'}}>|</span>
                        <a>
                            <span style={{paddingLeft:'10px', color:'white'}}>中文</span>
                        </a>
                    </Item>
                </Box>
              </div>  
              <div className="nav-right-center">
                <Divider 
                  light  
                  component="div"
                  sx={{ 
                    flexGrow: 1, 
                    justifyContent:'center', 
                    alignSelf: 'flex-end',
                    borderColor:'rgb(255,255,255,1)'
                  }}
                />
              </div>
              <div className="nav-right-bottom">
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Stack direction='row' spacing={{sm:0.1, md:3}}>
                    <Button 
                      aria-controls={openBuy ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openBuy ? "true" : undefined}
                      sx={{ color: '#fff' }}
                      onClick={openBuyMenu}
                      // onMouseOver={openBuyMenu}
                    >
                      Buy
                    </Button>
              
                    <Button
                      aria-controls={openRent ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openRent ? "true" : undefined}
                      sx={{ color: '#fff' }}
                      onClick={openRentMenu}
                      // onMouseOver={openRentMenu}
                    >
                      Rent
                    </Button>
                    <Button sx={{ color: '#fff' }}>
                      Commercial
                    </Button>
                    <Button sx={{ color: '#fff' }}>
                      Hotel Suites
                    </Button>
                    <Button  sx={{ color: '#fff' }}>
                      About Us
                    </Button>
                    <Button sx={{ color: '#fff' }}>
                      Our Services
                    </Button>
                  </Stack>
                </Box>
              </div>
            </div>
            </StyledToolbar>
            {openBuy && 
            <NavbarMenu 
              anchorEl={Buy}
              menuList={['Sydney', 'Gold Coast' , 'Pre-Owned']}
              open={openBuy}
              onClose={closeBuyMenu}
            /> }
            {openRent && 
            <NavbarMenu 
              anchorEl={Rent}
              menuList={['Build For Rent', 'Property Management']}
              open={openRent}
              onClose={closeRentMenu}
            /> }
        </AppBar>
    </Box>
  );
}