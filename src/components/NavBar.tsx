import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


import Logo from '../assets/logo.png'

import { Link, useLocation } from 'react-router-dom';




interface navOption {

    name: string,
    link: string
    
}


const pages: navOption[] = [
    {
    name: 'Inicio',
    link: '/'
    },
    {
    name: 'Ahorcado',
    link: '/hangman'
    },

]





const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const location = useLocation();
    
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   
  
    return (

        <AppBar position="relative" style={{backgroundColor: '#422987'}}>
            <Container maxWidth="xl">
            <Toolbar disableGutters>
               
                <img src={Logo} alt="Logo" />
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                         <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography textAlign="center">{page.name}</Typography>
                          </Link>
                     </MenuItem>
                    
                    ))}
                </Menu>
                </Box>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        style={{
                            fontWeight: location.pathname === page.link ? 'bold' : 'normal',
                            textDecoration: location.pathname === page.link ? 'underline' : 'none',
                        }}
                    >
                        
                    <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                    </Button>
                ))}
    
                </Box>
    
    
               
            </Toolbar>
            </Container>
        </AppBar>

    )
}


export default NavBar