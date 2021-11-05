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


const ProjectCard = (projects) => {
    const classes = useStyles();

    const [projects] = useState([
        {
            image: './src/assets/images/chillcover.gif',
            title: '&Chill',
            description: `This front end web application uses JavaScript and Materilaze 
            to pull data from 2 third party APIs. The user can select a movie 
            genre, restuarant type, and input their location and the application 
            will randomly return a list of movies currently streaming on Netflix 
            and restaurants in their area.`,
            github: 'https://github.com/Chasetopher/project-1',
            liveUrl: 'https://chasetopher.github.io/project-1/'
        },
        {
            image: './src/assets/images/deep-blue.png',
            title: 'Deep Blue',
            description: `This full stack web application combines JavaScript, Bootstrap, Handlebars
            Node, Express, and Sequelize to build an inventory management database which 
            allows users to login and view the current inventory by category as well as 
            add, update, and delete categories and items.`,
            github: 'https://github.com/Chasetopher/deep-blue',
            liveUrl: 'https://deep-blue-project-2.herokuapp.com/'
        },
        {
            image: './src/assets/images/coming-soon.jpg',
            title: 'Coming Soon',
            description: 'Coming Soon',
            github: '',
            liveUrl: ''
        },
        {
            image: './src/assets/images/coming-soon.jpg',
            title: 'Coming Soon',
            description: 'Coming Soon',
            github: '',
            liveUrl: ''
        },
        {
            image: './src/assets/images/coming-soon.jpg',
            title: 'Coming Soon',
            description: 'Coming Soon',
            github: '',
            liveUrl: ''
        },
        {
            image: './src/assets/images/coming-soon.jpg',
            title: 'Coming Soon',
            description: 'Coming Soon',
            github: '',
            liveUrl: ''
        },
    ])

    return (
        
        <div>
            <h1>Projects Page</h1>
            <Card className={ classes.root }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={ classes.media }
                        image={projects.image}
                        title={projects.title}
                        alt={projects.title}
                    />
                    <CardContent>
                        {/*TITLE*/}
                        <Typography gutterBottom variant="h5" component="h2">
                            {projects.title}
                        </Typography>
                        {/*DESCRIPTION*/}
                        <Typography variant="body2" component="p">
                            {projects.description}
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

export default ProjectCard;