import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import EmployeeIdForm from "../EmployeeIdForm";
import PriceTagForm from "../PriceTagForm";
import StepViewer from "../StepViewer";

type Path = "/" | "/employee-badge" | "/price-tag" | "/export" | string;

function getStepNumber(path: Path) {
  switch (path) {
    case "/":
      return 0;
    case "/employee-badge":
      return 1;
    case "/price-tag":
      return 2;
    case "/export":
      return 3;
    default:
      return 0;
  }
}

function GeneratorModal() {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [currentStepNumber, setCurrentStepNumber] = useState(0);

  useEffect(() => {
    setCurrentStepNumber(getStepNumber(pathname));
  }, [pathname]);

  return (
    <Container>
      <StepViewer currentStep={currentStepNumber} />
      <Segment attached>
        <Switch>
          <Route path="/employee-badge">
            <EmployeeIdForm />
          </Route>
          <Route path="/price-tag">
            <PriceTagForm />
          </Route>
          <Route path="/export">Export page</Route>
          <Route path="/" exact>
            <Button
              onClick={() => {
                push("/employee-badge");
              }}
            >
              Start
            </Button>
          </Route>
        </Switch>
      </Segment>
    </Container>
  );
}

export default GeneratorModal;
