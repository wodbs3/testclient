import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Toolbar, IconButton, Typography, Button, AppBar, Container} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import cog from './logo.png';
import './header.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: '120px',
    alignItems: 'center',
    paddingLeft: '250px',
    paddingRight: '250px', 
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  AppBar: {
    position: 'sticky',
    boxShadow: '0 0',
  },
 Button: {
  variant:'outlined',
  color:'#E6E6E6',
  size:'small',
  margin:'5px'
 },
 login:{
  position: 'absolute',
  left: '80%',
 },
  menu:{
    position: 'absolute',
    width: '60%',
    paddingLeft: '15%',

  },
  logo:{
    position: 'absolute',
    left: '12%',
  },
}));

const myTheme = createMuiTheme ({
  palette: {
    primary: {
      main: '#82c2b9',}
      ,
  },
});

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
          {children}
  </div>
)

export default function Header(props) {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={myTheme}>
      <AppBar className={classes.AppBar}>
      <Toolbar className={classes.toolbar}>
       <Container className={classes.logo}>
        <Button size="large" ><img src={cog}/></Button>
        </Container>
              <Container className={classes.menu}>
                <MenuItem>선물랭킹</MenuItem>
                <MenuItem>브랜드</MenuItem>
                </Container>
        
        <div  className={classes.login}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button className={classes.Button}>
          login
        </Button>
        <Button className={classes.Button}>
          join        
        </Button>
        </div>
      </Toolbar>
      </AppBar>
      </ThemeProvider>
  );
}