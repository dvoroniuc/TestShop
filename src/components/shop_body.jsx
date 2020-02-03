import React, { Component } from "react";
import { Row, Col, Input, FormGroup } from "reactstrap";
import CardItem from "./card_item";
import * as data from "../data";

export default class ShopBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: Number.MAX_SAFE_INTEGER,
      nameFilter: ""
    };

    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleMinChange(event) {
    this.setState({ min: Number(event.target.value) });
  }

  handleMaxChange(event) {
    this.setState({
      max:
        Number(event.target.value) === 0
          ? Number.MAX_SAFE_INTEGER
          : Number(event.target.value)
    });
  }

  handleNameChange(event) {
    this.setState({ nameFilter: event.target.value });
  }

  filterItems = (query, str) => {
    if (query !== "")
      return str.toLowerCase().indexOf(query.toLowerCase()) > -1;
    else return true;
  };

  render() {
    const size = Object.keys(data.default).length;
    const Content = [];
    for (let i = 0; i < size; i++) {
      if (
        this.state.min <= Number(data.default[i].price) &&
        Number(data.default[i].price) <= this.state.max &&
        this.filterItems(this.state.nameFilter, data.default[i].name)
      ) {
        Content.push(
          <CardItem
            id={data.default[i].id}
            key={data.default[i]}
            img={data.default[i].img}
            name={data.default[i].name}
            price={data.default[i].price}
            text={data.default[i].text}
          />
        );
      }
    }

    return (
      <>
        <Row style={{ margin: 0 + 15 + "px" }}>
          <div className="light filters-container">
            <FormGroup className="fixed-filters">
              <h3 align="center">Sort by:</h3>
              <Input
                onChange={this.handleNameChange}
                type="text"
                name="nameFilter"
                placeholder="name"
              />
              <Input
                onChange={this.handleMinChange}
                type="number"
                name="min"
                max={this.state.max}
                placeholder="minimum camera price"
              />
              <Input
                onChange={this.handleMaxChange}
                type="number"
                name="max"
                min={this.state.min}
                placeholder="maximum camera price"
              />
            </FormGroup>
          </div>
          <Col sm="8">{Content}</Col>
        </Row>
      </>
    );
  }
}
