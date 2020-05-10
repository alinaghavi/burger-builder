import React, {Component} from 'react';

import PropTypes from 'prop-types';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>
                    Burger Control
                </div>
            </Aux>
        );
    }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
