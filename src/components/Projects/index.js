import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import HttpIcon from '@mui/icons-material/Http';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140
    }
})

const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            {/*PROJECT 1*/}
            <h1>Projects Page</h1>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image="./assets/images/chillcover.gif"
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
                        <GitHubIcon fontSize="large" color="error" />
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <HttpIcon fontSize="large" color="error" />
                    </IconButton>
                </CardActions>
            </Card>

            {/*PROJECT 2*/}
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image="./assets/images/deep-blue.png"
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
                        <GitHubIcon fontSize="large" color="error" />
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <HttpIcon fontSize="large" color="error" />
                    </IconButton>
                </CardActions>
            </Card>

            {/*PROJECT 3*/}
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image=""
                        title=""
                        alt=""
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            Project Title
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            project descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject description
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <GitHubIcon fontSize="large" color="error" />
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <HttpIcon fontSize="large" color="error" />
                    </IconButton>
                </CardActions>
            </Card>

            {/*PROJECT 4*/}
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image=""
                        title=""
                        alt=""
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            Project Title
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            project descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject description
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <GitHubIcon fontSize="large" color="error" />
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <HttpIcon fontSize="large" color="error" />
                    </IconButton>
                </CardActions>
            </Card>

            {/*PROJECT 5*/}
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image=""
                        title=""
                        alt=""
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            Project Title
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            project descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject description
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <GitHubIcon fontSize="large" color="error" />
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <HttpIcon fontSize="large" color="error" />
                    </IconButton>
                </CardActions>
            </Card>

            {/*PROJECT 6*/}
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image=""
                        title=""
                        alt=""
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            Project Title
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            project descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject descriptionproject description
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*BUTTONS*/}
                    <IconButton aria-label="GitHub">
                        <GitHubIcon fontSize="large" color="error" />
                    </IconButton>
                    <IconButton aria-label="Live URL">
                        <HttpIcon fontSize="large" color="error" />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Projects;
