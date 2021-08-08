import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { teal } from '@material-ui/core/colors';
import { Link } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

//import all styles here
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(Button);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#E7FCFE',
        main: '#3C8881',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#000000',
      },
      // error: will use the default color
    },
  });

  //function here 
  function Landing(){
    return(
    <div>
    <h1> Order with Confidence </h1>
    <h2>Millions of people us SafeMeals to decode their personal food, allergies and diet preferences.</h2>
    <h2>Join us by answering a few questions to unlock your diet for Allergy safe deliveries </h2>
    <ColorButton variant="contained" color="primary">
    Click here to get started by Signing up

    </ColorButton>


  <h3>Already have an account?
  <Button color="primary">
      Sign in here
      </Button>
  </h3>
  </div>
    );
  }

  export default Landing;