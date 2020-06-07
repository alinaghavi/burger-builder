import React from "react";

import Auxiliary from "../../../../hoc/Auxillary";

import styles from "./OrderSummary.module.css";
import Button from "../../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummery = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey} style={{ textTransform: "capitalize" }}>
        <span>{igKey}</span>:{props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients: </p>
      <ul>{ingredientSummery}</ul>
      <p>Continue to checkout? </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
