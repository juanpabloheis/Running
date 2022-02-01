import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getActivityMonthlyState, getStats } from "../../Actions/index";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Container,
  Box, 
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "100vw",
      minHeight: "100vh",
      backgroundColor: "white",
    },
    containerCards: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "100vw",
        height: "auto",
        backgroundColor: "white",
    },
    cards: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "200px",
        height: "300px",
        backgroundColor: "grey",
        margin: "10px 20px",
    },
    text: {
        color: "black",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        textDecoration: "none",
    },
    link: {
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        textDecoration: "none",
        "&:hover": {
            background: "grey",
            cursor: "pointer",
        },
    },
}));

export default function MonthlyState() {
    const classes = useStyles();
    const tokens = useSelector(state => state.tokens);

    const userID = tokens.athlete.id;

    useEffect(() => {
        getActivityMonthlyState(userID, tokens.access_token, tokens.refresh_token );
    }, []);
    
    return(
        <Container>
            <Link to="/activities" className={classes.link}>
                <Typography>Back to activities</Typography>
            </Link>
            <Typography>Monthly State</Typography>

            <Box className={classes.containerCards}>
            </Box>
        </Container>
    )
}
