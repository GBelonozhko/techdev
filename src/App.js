import React from "react";
import logo from "./logo.svg";

import "./App.css";

import AppBar from "./components/AppBar.jsx";
import HomeCarousel from "./components/Carousel.jsx";
import Card from "./components/Card.jsx";
import BottomNav from "./components/BottomNav.jsx";
import ContactDirect from "./components/ContactDirect.jsx"

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className='App'>
      <AppBar />
      <HomeCarousel />

      <Typography
        variant='h2'
        gutterBottom
        className='homeTitle'
        color='primary'>
        We Build the Future
      </Typography>

      <Typography variant='body1' gutterBottom color='secondary'>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
<div class='parallax'></div>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'>
        <Grid>
          <Card />
        </Grid>
        <Grid>
          <Card />
        </Grid>
        <Grid>
          <Card />
        </Grid>
      </Grid>
      
<ContactDirect/>
      <BottomNav />
    </div>
  );
}

export default App;
