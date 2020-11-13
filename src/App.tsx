import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import HomeView from "./views/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid>
        <HomeView />
      </Container>
    </Router>
  );
}

export default App;
