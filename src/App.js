import React, { useState, useEffect } from 'react'

import Header from "./shared/Header";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import FullMovie from "./movie/FullMovie";
import TheaterList from "./theaters/TheaterList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

useEffect(() => {
  fetch('https://we-love-movies-uavc.onrender.com')
    .then((res) => res.json())
    .then((name) => setName([name]))


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route exact path="/movies">
          <DetailedMoviesList />
        </Route>
        <Route exact path="/movies/:movieId">
          <FullMovie />
        </Route>
        <Route exact path="/theaters">
          <TheaterList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
