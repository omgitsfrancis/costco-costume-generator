import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useCurrentStep } from "../../context/CurrentStep";

function EmployeeIdForm() {
  const { currentStep, setCurrentStep } = useCurrentStep();

  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <Input placeholder="Name" />
      </Form.Field>
      <Form.Field>
        <label>Position</label>
        <Input placeholder="Position (sub text)" />
      </Form.Field>
      <Form.Field>
        <label>Employee Since</label>
        <Input placeholder="Employee Since" />
      </Form.Field>
      <Button
        onClick={() => {
          setCurrentStep(currentStep - 1);
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
      >
        Next
      </Button>
    </Form>
  );
}

export default EmployeeIdForm;
