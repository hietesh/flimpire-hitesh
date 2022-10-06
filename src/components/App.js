import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movies, MovieInformation, Profiles, NavBar } from '.';
import UseStyles from './styles';

function App() {
  const classes = UseStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element="Home" />
          <Route path="/actors" element={<Actors />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movieinformation" element={<MovieInformation />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="*" element="Not Found" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
