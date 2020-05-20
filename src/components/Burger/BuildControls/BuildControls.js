import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = props => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.currentPrice.toFixed(2)} $</strong></p>
        {controls.map(ctrl => <BuildControl
            added={() => props.addItem(ctrl.type)}
            removed={() => props.removeItem(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}/>)}
        <button onClick={props.ordered} disabled={!props.purchasable} className={styles.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;
