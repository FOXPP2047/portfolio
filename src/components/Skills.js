import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import Particles from "react-particles-js";
// import ProgressBar from 'react-animated-progress-bar';

import Navbar from "./Navbar";

import cpp_icon from "../img/programming_lang_icons/cpp.svg";
import js_icon from "../img/programming_lang_icons/js.svg";
import react_icon from "../img/programming_lang_icons/react.png";
import node_icon from "../img/programming_lang_icons/nodejs.svg";
import express_icon from "../img/programming_lang_icons/express.png";
import mongo_icon from "../img/programming_lang_icons/mongodb.png";
import unity_icon from "../img/programming_lang_icons/unity.png";
import html_icon from "../img/programming_lang_icons/html.png";
import css_icon from "../img/programming_lang_icons/css.svg";
import jquery_icon from "../img/programming_lang_icons/jquery.png";
import opengl_icon from "../img/programming_lang_icons/opengl.png";

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
    icon: {
        width: "5rem",
        height: "5rem",
        margin: "2rem",
        filter: "invert(0.5) sepia(1)",
    },
    node: {
        width: "9rem",
        height: "4rem",
        margin: "2rem",
        filter: "invert(0.5) sepia(1)",
    }
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
                            <br/>
                            <img className={classes.icon} src={cpp_icon} alt="cpp-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Javascript
                            <br/>
                            {/* Javascript Icon by Icons8 https://iconscout.com/icon/javascript-20*/}
                            <img className={classes.icon} src={js_icon} alt="js-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            React
                            {/* react Icon by Iconfinder https://www.iconfinder.com/icons/4691292/react_icon */}
                            <br/>
                            <img className={classes.icon} src={react_icon} alt="react-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="75" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Node.Js
                            {/* Node.Js Icon by https://worldvectorlogo.com/logo/nodejs-icon */}
                            <br/>
                            <img className={classes.icon} src={node_icon} alt="node-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" /> */}
                        </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center" item xs={12}>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Express
                            <br/>
                            {/* express icon by https://www.pngfind.com/mpng/Jhxiib_express-js-icon-png-transparent-png/ */}
                            <img className={classes.icon} src={express_icon} alt="mongo-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            MongoDB
                            <br/>
                            {/* mongodb icon by https://www.logo.wine/logo/MongoDB */}
                            <img className={classes.icon} src={mongo_icon} alt="mongo-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="85" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            Unity
                            <br/>
                            {/* unity icon by http://logosvg.com/unity-technologies-logo/ */}
                            <img className={classes.icon} src={unity_icon} alt="unity-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="40" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            HTML5
                            <br/>
                            {/* html icon by https://www.pngkey.com/download/u2e6q8i1r5w7i1r5_svg-png-html-5-logo-black/ */}
                            <img className={classes.icon} src={html_icon} alt="html-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" /> */}
                        </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center" item xs={12}>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            CSS
                            <br/>
                            {/* <a href="https://iconscout.com/icons/css" target="_blank">Css Logo Icon</a> by <a href="https://iconscout.com/contributors/pixel-icons" target="_blank">Pixel Icons</a> */}
                            <img className={classes.icon} src={css_icon} alt="css-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="90" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            jQuery
                            <br/>
                            {/* https://logodix.com/logos/941103 */}
                            <img className={classes.icon} src={jquery_icon} alt="jquery-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="80" /> */}
                        </Typography>
                        <Typography className={classes.subTitle} gutterBottom variant="h4">
                            OpenGL
                            <br/>
                            {/* https://logodix.com/logos/941103 */}
                            <img className={classes.node} src={opengl_icon} alt="opengl-icon" />
                            {/* <ProgressBar defColor={{ fair: '#00a8cc', good: '#0779e4', excellent: '#0779e4', poor: '#00a8cc', }} width="230" trackWidth="13" percentage="70" /> */}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Skills
