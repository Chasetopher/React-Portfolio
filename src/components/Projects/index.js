import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';
import HttpIcon from '@mui/icons-material/Http';

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
    },
    media: {
        height: 240,
    }
})

const Projects = () => {
    const classes = useStyles();
    return (
        <Box sx={{ mt: 10, p: 5 }} justifyContent="center">

        {/*CARD CONTAINER START*/}
        <Grid sx={{ mb: 20 }} container spacing={5} columns={12} align="center">

        {/*PAGE TITLE*/}
        <Grid item xs={12}>
        <Typography gutterBottom variant="h1" component="h1" align="center" color="error">
            Projects
        </Typography>
        </Grid>
            {/*PROJECT 1*/}
            <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={require ("../../images/chillcover.gif")}
                        title="&Chill"
                        alt="&Chill"
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            &Chill
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            This front end web application uses JavaScript and Materilaze 
                            to pull data from 2 third party APIs. The user can select a movie 
                            genre, restuarant type, and input their location and the application 
                            will randomly return a list of movies currently streaming on Netflix 
                            and restaurants in their area.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <a href="https://github.com/Chasetopher/project-1" target="_blank" rel="noopener noreferrer">
                            <CodeIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <a href="https://pfizzz.github.io/project-1/" target="_blank" rel="noopener noreferrer">
                            <HttpIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                </CardActions>
            </Card>
            </Grid>

            {/*PROJECT 2*/}
            
            <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={require ("../../images/deep-blue.png")}
                        title="Deep Blue"
                        alt="Deep Blue"
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            Deep Blue
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            This full stack web application combines JavaScript, Bootstrap, Handlebars
                            Node, Express, and Sequelize to build an inventory management database which 
                            allows users to login and view the current inventory by category as well as 
                            add, update, and delete categories and items. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <a href="https://github.com/Chasetopher/deep-blue" target="_blank" rel="noopener noreferrer">
                            <CodeIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <a href="https://deep-blue-project-2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <HttpIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                </CardActions>
            </Card>
            </Grid>

            {/*PROJECT 3*/}
            
            <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={require ('../../images/readme-generator.png')}
                        title="README Generator"
                        alt="README Generator"
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            README Generator
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            This simple Node.js application uses inquirer to prompt the user in order to determine 
                            which categories they would like to include and allows them to input the information that 
                            they would like to include in those fields. After the user goes through all of the prompts, 
                            a README.md file is generated.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <a href="https://github.com/Chasetopher/README-Generator" target="_blank" rel="noopener noreferrer">
                            <CodeIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <a href="https://drive.google.com/file/d/10FI2FYqFt72Gp_ynpfOethz2nKoR0yxT/view" target="_blank" rel="noopener noreferrer">
                            <HttpIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                </CardActions>
            </Card>
            </Grid>

            {/*PROJECT 4*/}
            
            <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={require ('../../images/pizza-hunt.png')}
                        title="Pizza Hunt"
                        alt="Pizza Hunt"
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            Pizza Hunt
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            This full stack application uses JavaScript, Express, and Mongoose to allow users to create their own 
                            pizza recipes and save them to a MongoDB database. Users can also comment on other people's recipes.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <a href="https://github.com/Chasetopher/pizza-hunt" target="_blank" rel="noopener noreferrer">
                            <CodeIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <a href="https://github.com/Chasetopher/pizza-hunt" target="_blank" rel="noopener noreferrer">
                            <HttpIcon fontSize="large" color="error" />
                        </a>
                    </IconButton>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
        {/*CARD CONTAINER END*/}
        </Box>
    )
}

export default Projects;
