import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import photo from '../../images/personal-photo.jpeg';

const About = () => {
    return (
        <Box sx={{ mt: 10}} justifyContent="center">
            <Grid container spacing={2} columns={16} justifyContent="center">

                <Grid item xs={16} justifyContent="center">
                    <Typography gutterBottom variant="h1" component="h1" color="error" align="center">
                        About
                    </Typography>
                </Grid>

                <Grid item xs={16} lg={5} align="center">
                    <img src={photo} class="headshot" alt="" />
                </Grid>

                <Grid sx={{ p: 7, mt: 15 }} item xs={16} lg={5} className="bio">
                    <Typography variant="h4" color="error" align="center">
                        I am a full stack developer who is passionate about designing 
                        performant mobile first web applications using the latest web technologies.
                    </Typography>
                </Grid>

                <Grid item className="tech" xs={16} sx={{ mt: 10 }} justifyContent="center">

                    <Typography gutterBottom variant="h2" color="error" align="center">
                        Technologies
                    </Typography>

                    <Grid item align="center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="" className="devicon" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" className="devicon" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About;
