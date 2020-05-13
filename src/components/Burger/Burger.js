import React from 'react';

import PropTypes from 'prop-types';

import styles from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    // Start Of Important Code Review It, More and More
    let transformedIngredients = Object.keys(props.ingredients)     //["salad", "bacon", "cheese", "meat"]
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = "Please Start adding ingredients";
    }
    //End of Important Code Review It, More and More
    console.log(transformedIngredients);
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

burger.propTypes = {

};

export default burger;
