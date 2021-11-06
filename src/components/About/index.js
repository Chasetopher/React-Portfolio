import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const About = () => {
    return (
        <Box sx={{ mt: 35}}>
            <Grid container spacing={2} columns={16} justifyContent="center">
                <Grid item s={16} md={8} sx={{ display: { sm: 'none', md: 'block' } }}>
                    <Typography variant="h1" color="error" align="center">
                        Test About title
                    </Typography>
                </Grid>
                <Grid item s={16} md={8} justifyContent="center">
                    <Typography variant="h4" color="error" align="center">
                        Test About body
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About;
