import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
// import API from "./utils/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App(){
return(
  <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
);

}

export default App;
