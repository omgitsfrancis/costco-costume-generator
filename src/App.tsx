import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { CurrentStepProvider } from "./context/CurrentStep";
import HomeView from "./views/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <CurrentStepProvider>
        <Container fluid>
          <HomeView />
        </Container>
      </CurrentStepProvider>
    </Router>
  );
}

export default App;
