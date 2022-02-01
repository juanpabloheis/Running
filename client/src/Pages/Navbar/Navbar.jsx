import React from 'react';
import { makeStyles, AppBar, Typography, Box } from '@material-ui/core';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0px 20px",
        width: "100vw",
        backgroundColor: 'grey',
        height: '70px',
        position:'absolute'
    },
    icon: {
        backgroundSize: "contain",
        margin: "auto",
        height: "50px",
        "&:hover": {
            background: "grey",
            cursor: "pointer",
        },
    },
    text:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "0px 20px",
        "&:hover": {
            background: "grey",
            cursor: "pointer",
        },	
    },
}));

export default function Navbar(){
    const classes = useStyles();
    return (
        <AppBar className={classes.container}>
            <Link to ="/" style={{margin:'1vh'}}>
                <img src ={logo} className={classes.icon}/>
            </Link>
            <Typography>Home</Typography>
            <Box className={classes.text}>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
            </Box>
        </AppBar>
    )
}