import * as React from 'react';
import logo from '../../assets/images/logo.png';
//MATERIAL UI START//
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
//MATERIAL UI END//

const Nav = (props) => {
  const {
    pages = [],
    setCurrentPage
  } = props

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //set breakpoints more mobile responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Typography>
            <div>              
              { isMobile ? (
                //IF SMALL SCREEN, HAMBURGER MENU
                <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenu}
                >
                <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => setCurrentPage(pages[0])}>About</MenuItem>
                  <MenuItem onClick={() => setCurrentPage(pages[1])}>Projects</MenuItem>
                  <MenuItem onClick={() => setCurrentPage(pages[2])}>Contact</MenuItem>
                  <MenuItem onClick={() => setCurrentPage(pages[3])}>Resume</MenuItem>
                </Menu>
                </>
                ) : (
                  //ELSE, USE BUTTONS
                  <>
                  <Button color="inherit" onClick={() => setCurrentPage(pages[0])}>About</Button>
                  <Button color="inherit" onClick={() => setCurrentPage(pages[1])}>Projects</Button>
                  <Button color="inherit" onClick={() => setCurrentPage(pages[2])}>Contact</Button>
                  <Button color="inherit" onClick={() => setCurrentPage(pages[3])}>Resume</Button>
                  </>
              )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;