import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";

function PriceTagForm() {
  const { push } = useHistory();
  const [pricePerEach, setPricePerEach] = useState(false);

  return (
    <Form>
      <Form.Field>
        <label>Product ID</label>
        <Input placeholder="6-digit number" />
      </Form.Field>
      <Form.Field>
        <label>Product Name</label>
        <Input placeholder="Product Name" />
      </Form.Field>
      <Form.Field>
        <label>Sell Price</label>
        <Input placeholder="Sell Price" />
      </Form.Field>
      <Form.Checkbox
        checked={pricePerEach}
        onChange={(e) => setPricePerEach(!pricePerEach)}
        label="Add price per each section"
      />
      {pricePerEach && (
        <Form.Group widths="equal">
          <Form.Input fluid label="Quantity" placeholder="Quantity" />
          <Form.Input fluid label="Unit" placeholder="Unit" />
          <Form.Field>
            <label>Price Per Each (Calculated)</label>
            <span>0.25</span>
          </Form.Field>
        </Form.Group>
      )}
      <Button
        onClick={() => {
          push("/employee-badge");
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          push("/export");
        }}
      >
        Next
      </Button>
    </Form>
  );
}

export default PriceTagForm;
