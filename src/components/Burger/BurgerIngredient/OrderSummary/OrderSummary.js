import React, { Component } from "react";

import Auxiliary from "../../../../hoc/Auxillary";

import Button from "../../../UI/Button/Button";

class OrderSummary extends Component {
  //This can be functional Component

  // componentDidUpdate() {
  //   console.log("Order Summery Updated");
  // }

  render() {
    const ingredientSummery = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey} style={{ textTransform: "capitalize" }}>
            <span>{igKey}</span>:{this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients: </p>
        <ul>{ingredientSummery}</ul>
        <p>Continue to checkout? </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
