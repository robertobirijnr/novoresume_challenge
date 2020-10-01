import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import offer from '../images/offer.png'
import log from '../images/log.png'
import fast from '../images/fast.png'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  blogsContainer:{
      paddingTop:theme.spacing(3)
  },
  blogTitle:{
      fontWeight:800,
      paddingBottom:theme.spacing(3)
  },
  src: {
    paddingLeft:"140px",
  },
  callToAction: {
    paddingTop:"60px",
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  color:{
      background:"#00C8AA",
      color:"#fff"
  },
  main:{
    background:"#F5F5F5"
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
      <div className={classes.main}>
    <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h5" className={classes.blogTitle}>
            What do we do ?
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card >
      <CardActionArea>
          <div className={classes.src}>
          <img height="90px" src={offer} alt="offer"/>
          </div>
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Amazing Looking Quote
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card >
      <CardActionArea>
          <div className={classes.src}>
          <img height="90px" src={fast} alt="offer"/>
          </div>
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Amazing Looking Quote
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card >
      <CardActionArea>
          <div className={classes.src}>
          <img height="90px" src={log} alt="offer"/>
          </div>
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Amazing Looking Quote
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <div className={classes.callToAction}>
            <Button  variant="contained" className={classes.color}> 
            Try It Out Today
             </Button>
            </div>
        </Grid>
    </Container>
    </div>
  );
}
