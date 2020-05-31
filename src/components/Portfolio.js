import React, { useState } from 'react';
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
    CardContent,
} from "@material-ui/core"
import Navbar from "./Navbar";
import project1 from "../img/projects/bouncingmemory.png";
import project2 from "../img/projects/lunokhod.png";
import project3 from "../img/projects/welcometothefuture.png";

import { bmExplanation, mdExplanation, wfExplanation } from "./Explanation";

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
    const [prj1Show, setprj1Show] = useState(false);
    function handleShow1() {
        prj1Show ? setprj1Show(false) : setprj1Show(true);
    }
    const [prj2Show, setprj2Show] = useState(false);
    function handleShow2() {
        prj2Show ? setprj2Show(false) : setprj2Show(true);
    }
    const [prj3Show, setprj3Show] = useState(false);
    function handleShow3() {
        prj3Show ? setprj3Show(false) : setprj3Show(true);
    }

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
                                    { prj1Show ? bmExplanation : bmExplanation.substr(0, 100) + "..." }
                                    <Button component="span" size="small" color="primary" onClick={handleShow1}>
                                        { prj1Show ? "less" : "more" }
                                    </Button>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://www.youtube.com/watch?v=V1ehlOQD8bk&feature=youtu.be">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="/portfolio/bouncingmemory">
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
                                    { prj2Show ? mdExplanation : mdExplanation.substr(0, 100) + "..." }
                                    <Button component="span" size="small" color="primary" onClick={handleShow2}>
                                        { prj2Show ? "less" : "more" }
                                    </Button>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://youtu.be/6ADK3B0P25g?list=PL0051NcAsnzAWeRg8jovYSgQ0m8rO6fD3">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="/portfolio/meteor-cre-defense">
                                    Detail
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Project 3"
                            height="140" 
                            image={project3} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Welcome to the Future
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    { prj3Show ? wfExplanation : wfExplanation.substr(0, 100) + "..." }
                                    <Button component="span" size="small" color="primary" onClick={handleShow3}>
                                        { prj3Show ? "less" : "more" }
                                    </Button>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://youtu.be/Qd2JnjiEkVg">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="/portfolio/welcometothefuture">
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
