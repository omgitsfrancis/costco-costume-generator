import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import { useEmployeeBadgeData } from "../../context/FormData";

function EmployeeIdForm() {
  const { push } = useHistory();
  const {
    name,
    position,
    employeeSince,
    setName,
    setPosition,
    setEmployeeSince,
  } = useEmployeeBadgeData();

  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          placeholder="Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Position</label>
        <Input
          value={position}
          onChange={(e) => {
            setPosition(e.currentTarget.value);
          }}
          placeholder="Position (sub text)"
        />
      </Form.Field>
      <Form.Field>
        <label>Employee Since</label>
        <Input
          value={employeeSince}
          onChange={(e) => {
            setEmployeeSince(e.currentTarget.value);
          }}
          placeholder="Employee Since"
        />
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
