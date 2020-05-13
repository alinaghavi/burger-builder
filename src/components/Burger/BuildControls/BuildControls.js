import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import styles from './BuildControls.module.css';

const buildControls = props => (
    <div className={styles.BuildControls}>
        <BuildControl />
    </div>
);

export default buildControls;
