import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Footer = () => {
  function Copyright() {
    return (
      <Typography color="error">
        {'© '}
        {new Date().getFullYear()}
        {' - Chase Brackeen'}
      </Typography>
    );
  }
    return (
  
      <Box
        component="footer"
        className="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#2F3A45'
        }}
      >
        <Grid container justifyContent="center">
          <Grid item>
            <Container>
              <Copyright />
            </Container>

            <Container>
              <IconButton className="social" aria-label="GitHub">
                <a href="https://github.com/Chasetopher" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon fontSize="large" color="error" />
                </a>
              </IconButton>
              <IconButton className="social" aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/chase-brackeen/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon fontSize="large" color="error" />
                </a>
              </IconButton>
              <IconButton className="social" aria-label="Email">
                <a href="mailto:chase.brackeen@gmail.com" target="_blank" rel="noopener noreferrer">
                  <AlternateEmailIcon fontSize="large" color="error" />
                </a>
              </IconButton>
            </Container>
          </Grid>
        </Grid>
      </Box>

    )
}

export default Footer;
