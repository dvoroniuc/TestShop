import React from "react";
import { Row, Col } from "reactstrap";
import CartModal from "./cart_modal";
import { useSelector } from "react-redux";

const Example = props => {
  const selectedItems = useSelector(state => state.selected);
  let TotalPrice = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    TotalPrice += Number(selectedItems[i].price);
  }

  return (
    <div className="light head-container">
      <Row>
        <Col xs="6">
          <h2 style={{ marginTop: 3 + "%" }}>SLR cameras</h2>
        </Col>
        <Col xs="6">
          <div>{selectedItems.length} items were selected</div>
          <div> Total price: {TotalPrice} MDL</div>
          <CartModal buttonLabel="Open Cart" />
        </Col>
      </Row>
    </div>
  );
};
export default Example;
