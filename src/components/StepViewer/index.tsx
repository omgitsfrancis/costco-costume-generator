import React from "react";
import { Icon, Step } from "semantic-ui-react";
import { useCurrentStep } from "../../context/CurrentStep";

function StepViewer() {
  const { currentStep } = useCurrentStep();

  return (
    <Step.Group attached="top">
      <Step active={currentStep === 1} completed={currentStep > 1}>
        <Icon name="id badge" />
        <Step.Content>
          <Step.Title>Employee ID</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>
      <Step active={currentStep === 2} completed={currentStep > 2}>
        <Icon name="dollar" />
        <Step.Content>
          <Step.Title>Price Tag</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>
      <Step active={currentStep === 3} completed={currentStep > 3}>
        <Icon name="file pdf" />
        <Step.Content>
          <Step.Title>Export to PDF</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}

export default StepViewer;
