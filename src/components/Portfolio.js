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
import CustomParticles from "./Particles";

import bmImg from "../img/projects/bouncingmemory.png";
import project2 from "../img/projects/lunokhod.png";
import wfImg from "../img/projects/welcometothefuture.png";
import discordImg from "../img/projects/discord.jpg";
import webchatImg from "../img/projects/webchat.png";

import { bmExplanation, mdExplanation, wfExplanation, riotExplanation, webchatExplanation } from "./Explanation";

const useStyles = makeStyles({
    mainContainer: {
        //background: "#303960",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    },
})

const Portfolio = () => {
    const [bmShow, setBmShow] = useState(false);
    function handleShowBM() {
        bmShow ? setBmShow(false) : setBmShow(true);
    }
    const [prj2Show, setprj2Show] = useState(false);
    function handleShow2() {
        prj2Show ? setprj2Show(false) : setprj2Show(true);
    }
    const [wfShow, setwfShow] = useState(false);
    function handleShowWf() {
        wfShow ? setwfShow(false) : setwfShow(true);
    }
    const [discordShow, setdiscordShow] = useState(false);
    function handleShowDiscord() {
        discordShow ? setdiscordShow(false) : setdiscordShow(true);
    }
    const [webchatShow, setwebchatShow] = useState(false);
    function handleShowWebChat() {
        webchatShow ? setwebchatShow(false) : setwebchatShow(true);
    }

    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <CustomParticles />
            <Grid container justify="center" alignItems="center">
            {/* Project 5 Web Chat */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                        component="img" 
                        alt="Web Chat Service"
                        height="140" 
                        image={webchatImg} 
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Web Chat Service
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                { webchatShow ? webchatExplanation : webchatExplanation.substr(0, 100) + "..." }
                                <Button component="span" size="small" color="primary" onClick={handleShowWebChat}>
                                    { webchatShow ? "less" : "more" }
                                </Button>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="">
                                Youtube(Not Yet)
                            </Button>
                            <Button size="small" color="primary" href="https://github.com/FOXPP2047/SampleWebChat">
                                Github
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            {/* Project 4 discord riot api */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                        component="img" 
                        alt="Discord Bot Project"
                        height="140" 
                        image={discordImg} 
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Discord League of Legend Record Searcher
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                { discordShow ? riotExplanation : riotExplanation.substr(0, 100) + "..." }
                                <Button component="span" size="small" color="primary" onClick={handleShowDiscord}>
                                    { discordShow ? "less" : "more" }
                                </Button>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="">
                                Youtube(Not Yet)
                            </Button>
                            <Button size="small" color="primary" href="https://github.com/FOXPP2047/riot_games_discord_bot">
                                Github
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="Bouncing Memory"
                            height="140" 
                            image={bmImg} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Bouncing Memory
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    { bmShow ? bmExplanation : bmExplanation.substr(0, 100) + "..." }
                                    <Button component="span" size="small" color="primary" onClick={handleShowBM}>
                                        { bmShow ? "less" : "more" }
                                    </Button>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://www.youtube.com/watch?v=V1ehlOQD8bk&feature=youtu.be">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/FOXPP2047/GAM_200_what_I_did">
                                    Github
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
                            alt="Welcome to the future"
                            height="140" 
                            image={wfImg} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Welcome to the Future
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    { wfShow ? wfExplanation : wfExplanation.substr(0, 100) + "..." }
                                    <Button component="span" size="small" color="primary" onClick={handleShowWf}>
                                        { wfShow ? "less" : "more" }
                                    </Button>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://youtu.be/Qd2JnjiEkVg">
                                    Youtube
                                </Button>
                                <Button size="small" color="primary" href="https://github.com/FOXPP2047/weclometothefuture_what_I_did">
                                    Github
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
                                <Button size="small" color="primary" href="https://github.com/FOXPP2047/GAM_150_what_I_did">
                                    Github
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
