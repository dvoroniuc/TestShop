import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ModalCard from "./about_modal";

const CardItem = props => {
  return (
    <div>
      <Card>
        {props.img !== undefined && (
          <div style={{ display: "flex", margin: 2.5 + "%" }}>
            <CardImg
              top
              style={{ width: 40 + "%" }}
              src={props.img}
              alt="Something went wrong with the image"
            />
            <div style={{ margin: 10 + "%" + 2.5 + "%" }}>{props.text}</div>
          </div>
        )}
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <hr />
          <CardSubtitle>Price: {props.price} MDL</CardSubtitle>
          {props.img && (
            <>
              <hr />
              <ModalCard
                price={props.price}
                name={props.name}
                src={props.img}
                text={props.text}
                id={props.id}
                buttonLabel="More"
              />
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardItem;
