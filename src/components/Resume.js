import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import CustomParticles from "./Particles";

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
            <CustomParticles/>
            {/* <Iframe url="https://resume.creddle.io/embed/wk4ry63k03"
            width="850px"
            height="1100px"
            id="myId"
            display="initial"
            position="relative"/> */}
            <img src={resume_img} className={classes.image} alt="my resume" />
        </>
    );
}

export default Resume;
