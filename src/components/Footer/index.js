import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  function Copyright() {
    return (
      <Typography color='#FFFFFF'>
        {'© '}
        {new Date().getFullYear()}
        {' - Chase Brackeen'}
      </Typography>
    );
  }
    return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#2F3A45'
        }}
      >
        <Container maxWidth="sm">
          <Typography color='#FFFFFF' variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
    )
}

export default Footer;
