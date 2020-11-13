import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import { useCurrentStep } from "../../context/CurrentStep";
import EmployeeIdForm from "../EmployeeIdForm";
import StepViewer from "../StepViewer";

export default function GeneratorModal() {
  const { currentStep, setCurrentStep } = useCurrentStep();
  const { push } = useHistory();

  switch (currentStep) {
    case 0:
      push("/");
      break;
    case 1:
      push("/employee-badge");
      break;
    case 2:
      push("/price-tag");
      break;
    case 3:
      push("/export");
      break;
    default:
      push("/");
  }

  return (
    <Container>
      <div>current step: {currentStep}</div>
      <StepViewer />
      <Segment attached>
        <Switch>
          <Route path="/employee-badge">
            <EmployeeIdForm />
          </Route>
          <Route path="/price-tag">Price tag form</Route>
          <Route path="/export">Export page</Route>
          <Route path="/" exact>
            <Button
              onClick={() => {
                setCurrentStep(1);
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
