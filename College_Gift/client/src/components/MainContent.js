import React from 'react';

import {Container} from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {

        maxWidth: '100%',
        textAlign: 'center',
        height: '1000px',
    },
   
  }));

export default function MainContent(props) {
  
    const classes = useStyles();
  return (
    
    <Container className={classes.root}> 
        <Box>
          내용

        </Box>
    </Container>
   
  );
}


