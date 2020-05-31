import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    Dehaze,
    AssignmentInd,
    School,
    Computer,
    Home,
    Apps,
    // ContactMail,
} from "@material-ui/icons"

// CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: "20rem",
        background: "#222831",
        height: "100%"
    },
    listItem: {
        color: "tan",
        margin: "0.8rem"
    },
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <School />,
        listText: "Education",
        listPath: "/education"
    },
    {
        listIcon: <Computer />,
        listText: "Skills",
        listPath: "/skills"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    // {
    //     listIcon: <ContactMail/>,
    //     listText: "Contacts",
    //     listPath: "/contacts"
    // },
]

function Navbar() {
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }
    const classes = useStyles();
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <List>
                {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
                
            </List>
        </Box>
    );
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222831"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <Dehaze style={{color: "#f2a365"}}/>
                    </IconButton>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant="h5" style={{color: "#ececec"}}>
                            Yongmin's Portfolio
                        </Typography>
                    </Link>
                    <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                    {sideList("right")}
                    <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
