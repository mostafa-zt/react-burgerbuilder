import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
       return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.clicked} />
                <div className={`${classes.Modal} ${this.props.show ? classes.active : classes.hide}`}>
                    {this.props.children}
                </div>
            </Aux>

        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired
}


export default Modal;