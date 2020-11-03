import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Container, ButtonBase} from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        
        backgroundColor: '#E6E6E6',
        maxWidth: '100%',
        textAlign: 'center',
        height: '150px',
    },
   
  }));
const myTheme = createMuiTheme ({
  palette: {
    primary: {
      main: '#E6E6E6',}
      ,
  },
});

export default function Footer(props) {
  
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}>
     <div className='footer'>
         <div className={classes.root}>
            <span>콕콕콕</span>
         </div>
     </div>
     </ThemeProvider>
   
  );
}