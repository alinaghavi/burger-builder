import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from "../../hoc/Auxillary";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>
                    Burger
                </div>

                <div>
                    Burger Control
                </div>
            </Aux>
        );
    }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
