import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import HomeView from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormDataProvider } from "./context/FormData";
import ExportView from "./views/Export";

function App() {
  return (
    <Router>
      <FormDataProvider>

        <Switch>
          <Route path="/pdf-export">
            <ExportView />
          </Route>
          <Route path="/">
            <Container fluid>
              <HomeView />
            </Container>
          </Route>
        </Switch>
      </FormDataProvider>
    </Router>
  );
}

export default App;
