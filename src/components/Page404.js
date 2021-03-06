import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";

import Particles from "react-particles-js";
import Typing from "react-typing-animation";

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3",
    },
    title: {
        color: "#f2a365",
        marginTop: "2rem",
        marginBottom: "10rem",
        fontFamily: 'Open Sans',
    },
    cursor: {
        color: "#f2a365",
    },
});

function Page404() {
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
            <Box component="div" textAlign="center">
                <Typography className={classes.title} variant="h2" >
                <Typing speed={30} cursorClassName={classes.cursor}>
                    404 Error, Page not found
                </Typing>
                </Typography>
            </Box>
        </Box>
    );
}

export default Page404;