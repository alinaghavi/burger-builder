import React from 'react';
import Burger from '../../Burger/Burger';

import styles from './CheckoutSummery.module.css';
import Button from "../../UI/Button/Button";

const CheckoutSummery = (props) => {
    return (
        <div className={styles.CheckoutSummery}>
            <h1>We Hope it tastes well!</h1>
            <div style={{width:"100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummery;
