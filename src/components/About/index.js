import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const About = () => {
    return (
        <Box>
            <Grid container spacing={2} columns={16}>
                <Grid item s={16} md={8}>
                    <Typography variant="h2" color="common.white" align="center">
                        Test About title
                    </Typography>
                </Grid>
                <Grid item s={16} md={8}>
                    <Typography variant="h4" color="common.white" align="center">
                        Test About body
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About;
