import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Container,
  Box, 
} from "@material-ui/core";
import { Navbar } from "../index";

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      minWidth: "100vw",
      minHeight: "100vh",
      backgroundColor: "white",
    },
    containerTitle: {
        display: "flex",
        justifyContent: "top",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "90px"
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

export default function Activities() {
    const classes = useStyles();
    const tokens = useSelector(state => state.tokens);
    const user = useSelector(state => state.user);

    return (
        <Container className={classes.container}>
            <Navbar />
            <Box className={classes.containerTitle}>
                <Link to="/monthlystate" className={classes.link}>
                    <Typography>Monthly State</Typography>
                </Link>
                <br/>

                <Typography className={classes.text}>Recent Activity</Typography>
                <Box className={classes.containerCards}>
                    <Card className={classes.cards}>
                    <h2>Ride</h2>
                    <h4>Distance: {user?.recent_ride_totals.distance}</h4>
                    <h4>Moving time: {user?.recent_ride_totals.moving_time}</h4>
                    <h4>Elapsed time: {user?.recent_ride_totals.elapsed_time}</h4>
                    <h4>Elevation gain: {user?.recent_ride_totals.elevation_gain}</h4>
                    </Card>
                    <Card className={classes.cards}>
                    <h2>Run</h2>
                    <h4>Distance: {user?.recent_run_totals.distance}</h4>
                    <h4>Moving time: {user?.recent_run_totals.moving_time}</h4>
                    <h4>Elapsed time: {user?.recent_run_totals.elapsed_time}</h4>
                    <h4>Elevation gain: {user?.recent_run_totals.elevation_gain}</h4>
                    </Card>
                    <Card className={classes.cards}>
                    <h2>Swim</h2>
                    <h4>Distance: {user?.recent_swim_totals.distance}</h4>
                    <h4>Moving time: {user?.recent_swim_totals.moving_time}</h4>
                    <h4>Elapsed time: {user?.recent_swim_totals.elapsed_time}</h4>
                    <h4>Elevation gain: {user?.recent_swim_totals.elevation_gain}</h4>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
};