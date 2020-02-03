import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Collapse,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../actions/selecting";
import CardItem from "./card_item";
import swal from "sweetalert";

const ModalExample = props => {
  const dispatch = useDispatch();

  const selectedItems = useSelector(state => state.selected);

  let TotalPrice = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    TotalPrice += Number(selectedItems[i].price);
  }

  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const collapse = () => setIsOpen(!isOpen);

  const toggle = () => setModal(!modal);

  const Content = [];
  for (let i = 0; i < selectedItems.length; i++) {
    Content.push(
      <CardItem
        key={selectedItems[i]}
        id={selectedItems[i].id}
        name={selectedItems[i].name}
        price={selectedItems[i].price}
      />
    );
  }

  return (
    <>
      <Button color="danger" onClick={toggle}>
        <img
          height="15px"
          src="https://cdn.onlinewebfonts.com/svg/img_191913.png"
          alt="Open Cart"
        />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Total price: {TotalPrice} MDL</ModalHeader>
        {selectedItems.length > 0 ? (
          <>
            <Card>
              <CardBody>{Content}</CardBody>
            </Card>
            <ModalFooter>
              <Button color="primary" onClick={collapse}>
                Make an order
              </Button>
              <Collapse isOpen={isOpen}>
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="password placeholder"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      id="exampleAddress"
                      placeholder="1234 Main St"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input
                      type="text"
                      name="address2"
                      id="exampleAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">City</Label>
                        <Input type="text" name="city" id="exampleCity" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="exampleZip">Zip</Label>
                        <Input type="text" name="zip" id="exampleZip" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </Collapse>
              {isOpen && (
                <Button
                  onClick={() => {
                    dispatch(reset());
                    toggle();
                    swal("", "Thank you for your purchase", "success");
                  }}
                  color="primary"
                >
                  Valide purchase
                </Button>
              )}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </>
        ) : (
          <ModalBody>
            <Card>
              <CardBody>
                To purchase an order, please select at least one product
              </CardBody>
            </Card>
          </ModalBody>
        )}
      </Modal>
    </>
  );
};

export default ModalExample;
