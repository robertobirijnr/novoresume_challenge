import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import header from '../header.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  hero:{
    background:'#6A6AC4',
    height:"500px",
  },
  heroImage:{
    paddingBottom:'10%',
    paddingLeft:'50%', 
  },
  title:{
      color:"#fff",
      paddingTop:"20%",
      paddingLeft:"50px"
  },
  title1:{
      color:"#fff",
      paddingTop:"1%",
      paddingLeft:"50px"
  },
  root: {
    flexGrow: 1,
  },
}));


export default function Hero() {
  const classes = useStyles();

  return (    
      <Box className={classes.hero}>
      <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6}> 
      <Typography variant="h4" className={classes.title}>
      A better, fast and smarter <br/> way of building your offers.
     </Typography>  
       
      <Typography variant="h6" className={classes.title1}>
      increase revenue and outshine competion. All for the price of a coffee
     </Typography>  
       
        </Grid>
        <Grid item xs={6}>
            <img src={header} alt="Ampersand Academy Logo" height="300px"/>
        </Grid>
      </Grid>
      </div>
      </Box>
    
  );
}
