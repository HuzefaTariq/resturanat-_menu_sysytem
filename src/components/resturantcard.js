import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ResturantCard({menu}) {
  const classes = useStyles();
  console.log(menu)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

          {menu.map((obj)=>{
              return(
                  <>
                  <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
              <h1 className="a">{obj.id}</h1>
              <h1 className="no"> {obj.categary}</h1>
              <img className="image" src={obj.image} alt="food item" ></img>
              <h3>{obj.name1}</h3>
              <p>this is is sesbasbahs sbhabsha sa dshbds nsudnb sdhudsa asbnxabsd asnduashywbd sdxashdbuyasd jh</p>
              <Button variant="contained">Order Now</Button>
          </Paper>
        </Grid>
                  </>
              )
          })}
        
      </Grid>
    </div>
  );
}

