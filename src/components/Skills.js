import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import Particles from "react-particles-js";
import ProgressBar from 'react-animated-progress-bar';

import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        // backgroundColor: "white !important",
    },
    title: {
        color: "#f2a365",
        marginTop: "2rem",
        marginBottom: "8rem",
        fontFamily: 'Open Sans',
    },
    subTitle: {
        color: "#e8e4e1",
        marginLeft: "8rem",
        marginRight: "8rem",
        marginBottom: "8rem",
        fontFamily: 'Open Sans',
    },
    progress: {
    },
    particlesCanva: {
        position: "absolute",
        opacity: "0.3",
    },
}));
const Skills = () => {
    const classes = useStyles();

    return (
        <Box component="div">
            <Navbar />
            <Particles canvasClassName={classes.particlesCanva}
                params={{
                    particles:{
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            strole: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
            <Box className={classes.mainContainer} textAlign="center">
                <Typography className={classes.title} gutterBottom variant="h2">
                    My Skills
                </Typography>
                <Grid container justify="center" alignItems="center">
                    <Grid container justify="center" alignItems="center" item xs={12}>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            C++
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Javascript
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            React.Js
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="75" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Node.Js
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                        </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center" item xs={12}>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Express
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            MongoDB
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="85" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Unity
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="40" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            HTML5
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" />
                        </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center" item xs={12}>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            CSS
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            jQuery
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            OpenGL
                            <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="70" />
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Grid container justify="center" alignItems="center" xs={3}>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        C++
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        Javascript
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }}  width="230" trackWidth="13" percentage="80" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        React.Js
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="75" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        Node.Js
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        Express
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        MongoDB
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="85" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        Unity
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="40" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        HTML5
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        CSS
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        jQuery
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" />
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom variant="h4">
                        OpenGL
                        <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="70" />
                    </Typography>
                </Grid> */}
            </Box>
        </Box>
    )
}

export default Skills
