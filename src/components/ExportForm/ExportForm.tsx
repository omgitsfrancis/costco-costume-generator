import React from "react";
import {
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";
import { StyledSpan } from "./styles";
import { useEmployeeBadgeData, usePriceTagData } from "../../context/FormData";

const NotSpecifiedLabel = () => <StyledSpan>Not specified</StyledSpan>;

function ExportForm() {
  const { name, position, employeeSince } = useEmployeeBadgeData();
  const {
    productId,
    productName,
    sellPrice,
    showPricePerEach,
    quantity,
    unit,
  } = usePriceTagData();

  return (
    <Segment>
      <Header as="h3">Employee ID</Header>
      <List horizontal verticalAlign="top">
        <List.Item>
          <List.Header>Name</List.Header>
          {name || <NotSpecifiedLabel />}
        </List.Item>
        <List.Item>
          <List.Header>Position</List.Header>
          {position || <NotSpecifiedLabel />}
        </List.Item>
        <List.Item>
          <List.Header>Employee Since</List.Header>
          {employeeSince || <NotSpecifiedLabel />}
        </List.Item>
      </List>
      <Divider />
      <Header as="h3">Price Tag</Header>
      <Grid>
        <Grid.Column>
          <Grid.Row>
            <List horizontal>
              <List.Item>
                <List.Header>Product ID</List.Header>
                {productId || <NotSpecifiedLabel />}
              </List.Item>
              <List.Item>
                <List.Header>Product Name</List.Header>
                {productName || <NotSpecifiedLabel />}
              </List.Item>
              <List.Item>
                <List.Header>Sell Price</List.Header>
                {sellPrice || <NotSpecifiedLabel />}
              </List.Item>
            </List>
          </Grid.Row>
          <Grid.Row>
            {showPricePerEach && (
              <List horizontal>
                <List.Item>
                  <List.Header>Quanitiy</List.Header>
                  {quantity || <NotSpecifiedLabel />}
                </List.Item>
                <List.Item>
                  <List.Header>Unit</List.Header>
                  {unit || <NotSpecifiedLabel />}
                </List.Item>
                <List.Item>
                  <List.Header>Price Per Each (Calculated)</List.Header>
                  {sellPrice || <NotSpecifiedLabel />}
                </List.Item>
              </List>
            )}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default ExportForm;
