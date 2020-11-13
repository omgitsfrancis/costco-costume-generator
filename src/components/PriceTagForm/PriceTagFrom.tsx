import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import { usePriceTagData } from "../../context/FormData";

function PriceTagForm() {
  const { push } = useHistory();
  const {
    productId,
    productName,
    sellPrice,
    showPricePerEach,
    quantity,
    unit,
    setProductId,
    setProductName,
    setSellPrice,
    setShowPricePerEach,
    setQuantity,
    setUnit,
  } = usePriceTagData();

  return (
    <Form>
      <Form.Field>
        <label>Product ID</label>
        <Input
          value={productId}
          onChange={(e) => setProductId(e.currentTarget.value)}
          placeholder="6-digit number"
        />
      </Form.Field>
      <Form.Field>
        <label>Product Name</label>
        <Input
          value={productName}
          onChange={(e) => setProductName(e.currentTarget.value)}
          placeholder="Product Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Sell Price</label>
        <Input
          value={sellPrice}
          onChange={(e) => setSellPrice(e.currentTarget.value)}
          placeholder="Sell Price"
        />
      </Form.Field>
      <Form.Checkbox
        checked={showPricePerEach}
        onChange={(e) => setShowPricePerEach(!showPricePerEach)}
        label="Add price per each section"
      />
      {showPricePerEach && (
        <Form.Group widths="equal">
          <Form.Input
            value={quantity}
            onChange={(e) => setQuantity(e.currentTarget.value)}
            fluid
            label="Quantity"
            placeholder="Quantity"
          />
          <Form.Input
            value={unit}
            onChange={(e) => setUnit(e.currentTarget.value)}
            fluid
            label="Unit"
            placeholder="Unit"
          />
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
