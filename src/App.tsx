import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import HomeView from "./views/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { FormDataProvider } from "./context/FormData";

function App() {
  return (
    <Router>
      <FormDataProvider>
        <Container fluid>
          <HomeView />
        </Container>
      </FormDataProvider>
    </Router>
  );
}

export default App;
