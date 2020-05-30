import React from 'react'
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import Linkedin from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "white",
            "&:hover": {
                fill: "#ffa41b",
                fontSize: "2rem",
            }
        }
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<GitHub />} href="https://github.com/FOXPP2047" />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Linkedin />} href="https://www.linkedin.com/in/yongmin-cho-72814a192/" />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Instagram />} href="https://www.instagram.com/c.ymin95/" />
        </BottomNavigation>
    )
}

export default Footer
