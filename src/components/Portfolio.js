import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Button,
    Typography,
    CardContent
} from "@material-ui/core"
import Navbar from "./Navbar";
import project1 from "../img/projects/bouncingmemory.png";
import project2 from "../img/projects/lunokhod.png";

const useStyles = makeStyles({
    mainContainer: {
        background: "#303960",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})
const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" alignItems="center">
            {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Project 1"
                            height="140" 
                            image={project1} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Bouncing Memory
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Custom Game Engine based on C++
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://www.youtube.com/watch?v=V1ehlOQD8bk&feature=youtu.be">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="/bouncingmemory">
                                    Detail
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Project 2"
                            height="140" 
                            image={project2} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Meteor-cre Defense
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    C-based Game Engine
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://youtu.be/6ADK3B0P25g?list=PL0051NcAsnzAWeRg8jovYSgQ0m8rO6fD3">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="/meteor-cre-defense">
                                    Detail
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
