import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "#c1a57b",
        borderColor: "#c1a57b",
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#ececec",
        },
        "& label": {
            color: "#f2a365",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#f2a365",
            },
            "&:hover fieldset": {
                borderColor: "#f2a365",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#f2a365",
            }
        }
    },
})(TextField);

function Contacts() {
    const classes = useStyles();

    return (
        <Box component="div" style={{background: "#222831", height: "100vh"}}>
        <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "#c1a57b", textAlign: "center", textTransform: "uppercase"}}>
                        Contact me
                    </Typography>
                    <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium"/>
                    <br/>
                    <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium"/>
                    <br/>
                    {/* <InputField fullWidth={true} label="Company Name" variant="outlined" inputProps={{style:{color: "white"}}} margin="dense" size="medium"/>
                    <br/> */}
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
