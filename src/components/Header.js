import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Avatar, Grid, Box } from "@material-ui/core"
//import Typed from "react-typed";
import Typing from "react-typing-animation";
import profile_img from "../img/profile.jpg";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },
    title: {
        color: "#f2a365"
    },
    subTitle: {
        color: "tan",
        marginBottom: "3rem",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        //width: "100vw",
        width: "100%",
        textAlign: "center",
        zIndex: 1,
    },
    cursor: {
        color: "#f4ea8e",
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={profile_img} alt="Yongmin Cho"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typing speed={30} cursorClassName={classes.cursor}>Hello, I'm Yongmin Cho </Typing>
            </Typography>
            <br/>
            <Typography className={classes.subTitle} variant="h5">
                <Typing speed={30} loop cursorClassName={classes.cursor}>
                    Front-end Development
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={22}/>
                    Back-end Development
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={21}/>
                    Game Development
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={17}/>
                </Typing>
            </Typography>
        </Box>
    )
}

export default Header
