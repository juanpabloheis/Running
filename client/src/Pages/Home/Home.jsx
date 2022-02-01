import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Container,
  Box, 
} from "@material-ui/core";
const { REACT_APP_CLIENT_ID } = process.env;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/train-like-a-beast-royalty-free-image-1613671160.?crop=1.00xw:1.00xh;0,0&resize=980:*)`,
    backgroundSize: "cover",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "300px",
    height: "300px",
    backgroundColor: "none",
  },
  text: {
    color: "white",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
  }
}));

export default function Home() {
  const classes = useStyles();

  const redirectUrl = "http://localhost:3000/redirect"
  
  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=activity:read_all,activity:write,profile:read_all,profile:write`;
  };

  // const handleLogin = () => {
  //   window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=activity:read`;
  // };

 
  return (
      <Container className={classes.container}>
        <Box className={classes.box}>
          <Typography className={classes.text}>
              FEEL GOOD BREATH
          </Typography>
        <Button
          variant="contained"
  /*         className={classes.button} */
          onClick={handleLogin}
        >
            Enter
        </Button>
      </Box>
      </Container>
  )
};