import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { zoomInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Box, Typography } from "@material-ui/core";

import Navbar from "./Navbar";
import CustomParticles from "./Particles";

const styles = {
    zoominup: {
      animation: 'x 1s',
      animationName: Radium.keyframes(zoomInUp, 'zoominup')
    }
  }

const useStyles = makeStyles(theme => ({
    title: {
        color: "#f2a365",
        marginTop: "2rem",
        marginBottom: "10rem",
        fontFamily: 'Open Sans',
    },
    school: {
        color: "#f9c49a",
        margin: "1rem",
        fontFamily: 'Open Sans',
    },
    department: {
        color: "#e8e4e1",
        marginBottom: "8rem",
        fontFamily: 'Open Sans',
    },
    particlesCanva: {
        position: "absolute",
        opacity: "0.3",
    }
}));

const Eucation = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <CustomParticles/>
            <Box textAlign="center">
                <StyleRoot>
                    <div style={styles.zoominup}>
                        <Typography className={classes.title} gutterBottom variant="h2">
                            Education
                        </Typography>
                        <Typography className={classes.school} gutterBottom variant="h3">
                            DigiPen Institute of Technology
                        </Typography>
                        <Typography className={classes.department} gutterBottom variant="h4">
                            Bachelor of Science, Computer Science in Real Time Interactive Simulation
                        </Typography>
                        <Typography className={classes.school} gutterBottom variant="h3">
                            Keimyung University
                        </Typography>
                        <Typography className={classes.department} gutterBottom variant="h4">
                            Bachelor of Science, Game Mobile Content
                        </Typography>
                    </div>
                </StyleRoot>
            </Box>
        </div>
    );
}

export default Eucation
