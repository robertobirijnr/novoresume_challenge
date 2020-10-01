import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles((theme) => ({
  blogsContainer:{
      paddingTop:theme.spacing(3)
  },
  blogTitle:{
      fontWeight:800,
      paddingBottom:theme.spacing(3)
  },
  media: {
    height: 140,
  }
 
}));

export default function BlogSection() {
  const classes = useStyles();

  return (
     <Container maxWidth="lg" className={classes.blogsContainer}>
         <Typography variant="h5" className={classes.blogTitle}>
            Recent blog posts
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/image-2.png"
          title="Promotional item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Promotional Items
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
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/image-3.png"
          title="Promotional item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Promotional Items
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
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/image-2.png"
          title="Promotional item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Promotional Items
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
     </Container>
  );
}
