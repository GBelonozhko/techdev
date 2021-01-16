import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'>
        <Grid>
          <Card>
            <CardActions>
              <TextField id='standard-basic' label='filled' variant='outlined' />
            </CardActions>
          </Card>
        </Grid>

        <Grid>
          <Card>
            <CardActions>
              <TextField id='standard-basic' label='filled' variant='outlined' />
            </CardActions>
          </Card>
        </Grid>

        <Grid>
          <Card>
            <CardActions>
              <TextField id='standard-basic' label='filled' variant='outlined' />
            </CardActions>
          </Card>
        </Grid>

        </Grid>
        
    </form>
  );
}
