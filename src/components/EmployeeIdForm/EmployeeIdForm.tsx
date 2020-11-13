import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";

function EmployeeIdForm() {
  const { push } = useHistory();
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
          push("/");
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          push("/price-tag");
        }}
      >
        Next
      </Button>
    </Form>
  );
}

export default EmployeeIdForm;
