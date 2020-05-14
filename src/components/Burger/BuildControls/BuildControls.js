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
        {controls.map(ctrl => <BuildControl added={() => props.addItem(ctrl.type)} removed={() => props.removeItem(ctrl.type)}
                                            key={ctrl.label} label={ctrl.label} disabled={props.disabled[ctrl.type]}/>)}
    </div>
);

export default buildControls;
