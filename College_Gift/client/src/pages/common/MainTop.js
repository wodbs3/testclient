import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import {Container, Grid, Slider, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './mainTop.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        lineHeight: 15,
        backgroundColor: '#82c2b9',
        maxWidth: '100%',
        textAlign: 'center',
        height: '600px'
    },
    button: {
      margin: '15px',
      borderRadius: '20px',
      boxSizing: 'content-box',
      backgroundColor: 'white',
      width: '10%',
      height: '40%',
    },
    label:{
      fontSize: '30px',
      color: 'aliceblue',
      paddingRight: '5%',
    },
    gridRoot:{
      textAlign: 'initial',
      paddingLeft: '5%',
    },
    gird:{
      lineHeight: '2.5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    slider:{
      width: '300px',
      
    },
    ScPrice:{
      position: 'absolute',
      top: '52%',
      left: '65%',
    },
   
  }));

const marks = [
  {
    value: 0,
    label: '0 원'
  },
  {
    value: 100000,
    label: '100000 원'
  }
]

  function valuetext(value) {
    return `${value}`;
  }

  const PrettoSlider = withStyles({
    root: {
      color: '#CACACA',
      height: 8,
      left: '-50%',
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  
export default function MainTop(props) {
    const [value, setValue] = React.useState([0, 1000000]);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
      
     
         <div className={classes.root}>
            <p className="typo_1">
             소중한 사람에게 전달될 당신의 마음,<br/>
             COG과 함께 더욱 따뜻한 마음을 선물하세요.
           </p>
           <p className="typo_2">선물 받는 사람의 이미지를  콕 짚어주세요 </p>
            
            <Container className="selectTab">
             <Grid container spacing={1} className={classes.gridRoot}>
              <Grid className={classes.gird} item xs={12}>
                <label className={classes.label}>나이</label> 
                
                <Button className={classes.button}> 10대</Button>
                <Button className={classes.button}> 20대</Button>
                <Button className={classes.button}> 30대</Button>
                <Button className={classes.button}> 40대</Button>
                <Button className={classes.button}> 50대</Button>
                <Button className={classes.button}> 60대</Button>          
              
              </Grid>
              <Grid className={classes.gird} item xs={12}>
                <label className={classes.label}>성별</label>
                <Button className={classes.button}> 남자</Button>
                <Button className={classes.button}> 여자</Button>
                        
              </Grid>
              <Grid className={classes.gird} item xs={12}>
                <label className={classes.label}>기념일</label>
                <Button className={classes.button}> 발렌타인</Button>
                <Button className={classes.button}> 어버이날</Button>
                <Button className={classes.button}> 명절</Button>
                <Button className={classes.button}> 스승의날</Button>
                <Button className={classes.button}> 군 입대</Button>
       
              </Grid>
              </Grid>
            </Container>
         
            <Container className={classes.slider}>
              <Typography id="rande-slider" gutterBottom>
                가격
              </Typography>

              <PrettoSlider
                value={value}
                onChange={handleChange}
                min={0}
                max={100000}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                step={1000}
                marks={marks}
              />
              
            
              </Container>
            <div className={classes.ScPrice}>
               <Link to="/searchPrice">가격 상세 검색</Link>
               </div>
           
          </div>
     
   
  );
}