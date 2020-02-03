import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle
} from "reactstrap";
import { useDispatch } from "react-redux";
import { select } from "../actions/selecting";
import swal from "sweetalert";

const AboutModal = props => {
  const dispatch = useDispatch();

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Card>
            <CardBody>
              <CardTitle>Name: {props.name}</CardTitle>
              <hr />
              <CardSubtitle>Price: {props.price} MDL</CardSubtitle>
              <hr />
              <CardText>Description: {props.text}</CardText>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              dispatch(select(props));
              swal("", "This product was added to the cart", "success");
            }}
          >
            Add To Cart
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AboutModal;
