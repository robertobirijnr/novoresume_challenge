import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.png';
import Container from '@material-ui/core/Container';
import Register from './registerModal'
import Login from './loginModal'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
      background:'#fff',
  },
  barItems:{
    paddingBottom:"20px"
  },
  btnspace: {
    '& > *': {
      margin: theme.spacing(1),
    },
},
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Container>
        <Toolbar className={classes.barItems}>
          <Typography color="primary" variant="h6" className={classes.title}>
          <img className="amplogo" src={logo} alt="Ampersand Academy Logo" height="50px" width="50px"/>
          </Typography>
          <div className={classes.btnspace}>
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        <Register/> 
        </Grid>
        <Grid item xs>
        <Login/>
        </Grid>
        <Grid item xs>
         
        </Grid>
      </Grid>
      
    </div>
         
          
          </div>
          
        </Toolbar>
        </Container>
        
      </AppBar>
    </div>
  );
}
