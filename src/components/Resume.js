import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Particles from "react-particles-js";
import resume_img from "../img/resume.png";

const useStyles = makeStyles(theme => ({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3",
    },
    mainContainer: {
        backgroundColor: "white",
        padding: "2rem",
    },
    name: {
        marginTop: "1rem",
        marginBottom: "2rem",
        fontFamily: 'Open Sans',
        fontSize: "3rem",
    },
    info: {
        margin: "1rem",
        fontFamily: 'Open Sans',
        fontSize: "1.5rem",
    },
    department: {
        color: "#e8e4e1",
        marginBottom: "8rem",
        fontFamily: 'Open Sans',
    },
    image: {
        display: "block",
        margin: "auto",
        width: "50%",
        height: "100%"
    },
}));


const Resume = () => {
    const classes = useStyles();
    return (
        <>
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
            <img src={resume_img} className={classes.image} alt="my resume" />
        </>
    );
}

export default Resume;
