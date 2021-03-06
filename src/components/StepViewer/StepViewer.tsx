import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Step } from "semantic-ui-react";

interface StepViewerProps {
  currentStep: number;
}

function StepViewer(props: StepViewerProps) {
  const { push } = useHistory();
  const { currentStep } = props;
  return (
    <Step.Group attached="top">
      <Step
        active={currentStep === 1}
        completed={currentStep > 1}
        link
        onClick={() => {
          push("/employee-badge");
        }}
      >
        <Icon name="id badge" />
        <Step.Content>
          <Step.Title>Employee ID</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>
      <Step
        active={currentStep === 2}
        completed={currentStep > 2}
        link
        onClick={() => {
          push("/price-tag");
        }}
      >
        <Icon name="dollar" />
        <Step.Content>
          <Step.Title>Price Tag</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>
      <Step
        active={currentStep === 3}
        completed={currentStep > 3}
        link
        onClick={() => {
          push("/export");
        }}      >
        <Icon name="file pdf" />
        <Step.Content>
          <Step.Title>Export to PDF</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
}

export default StepViewer;
