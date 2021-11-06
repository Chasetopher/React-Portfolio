import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const About = () => {
    return (
        <Box sx={{ mt: 35}}>
            <Grid container spacing={2} columns={16} justifyContent="center">
                <Grid item s={16} md={8} sx={{ display: { sm: 'none', md: 'block' } }}>
                    <Typography variant="h2" color="error" align="center">
                        Technologies
                    </Typography>
                    <Grid item>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" className="devicon" />

                    </Grid>
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
