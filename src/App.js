import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Breed from "./components/Breed";
import NotFound from "./components/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import LandingPageNav from "./components/LandingPageNav";
import HomeNavBar from "./components/HomePageNav";
import LandingPage from "./components/Landing";
import "./App.css";

function App() {
  const location = useLocation();
  const path = location.pathname;
  let navbar;

  if (
    path === "/" ||
    path === "/login" ||
    path === "/register" ||
    path === "/about" ||
    path === "/services" ||
    path === "/footer"
  ) {
    navbar = <LandingPageNav />;
  } else {
    navbar = <HomeNavBar />;
  }

  return (
    <Router>
      {navbar}
      {/* <Header /> */}
      <div style={{top: "10em", bottom: "10em"}}>
        {" "}
        <Switch>
          <Route exact path="/" component={LandingPage} />{" "}
          <Route exact path="/home" component={Home} />
          <Route path="/breed/:breed" component={Breed} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
