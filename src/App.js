import logo from "./logo.svg";
import "./App.css";
import React, { Component, createContext } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { render } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
import MoviesPage from "./components/moviesPage/moviesPage";
import HomePage from "./components/homePage/homePage";
import MovieDetailsPage from "./components/moviesDetailsPage/moviesDetailsPage";
import LoginForm from "./components/loginPage/loginForm";
import RegistrationForm from "./components/registrationPage/registrationForm";

export const Theme = createContext("light");
class App extends Component {
  render() {
    return (
      <Theme.Provider value="dark">
        <div>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/Registration" element={<RegistrationForm />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                {/* there is no optional params in react router dom v6 ,
                use nested routed with new param ,or new route with same name including the param  */}
                {/* <Route path=":showNextMovie" element={<MovieDetailsPage />} /> */}
              </Route>
              {/* redirect to Not found */}
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </div>
        </div>
      </Theme.Provider>
    );
  }
}

export default App;
