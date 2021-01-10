import React, { Component } from 'react';
import classes from './OrderSummary.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class OrderSummary extends Component {
    render() {
        const summary = Object.keys(this.props.ingredients).map(key => {
            return (
                <li className={classes.SummaryItem} key={key}>
                    <span className={classes.Summary_SubItem}>{key}: </span> <span>{this.props.ingredients[key].amount}</span>
                </li>
            )
        });
        return (
            <Aux>
                <h3 className={classes.Header}>Order Summary</h3>
                <ul>
                    {summary}
                </ul>
                <p className={classes.TotalPrice}>Total Price: <span>${parseFloat(this.props.totalPrice).toFixed(2)}</span></p>
                <div className={classes.ButtonSection}>
                    <button className={`${classes.Button} ${classes.ButtonSucces}`} onClick={this.props.orderConfirmed}>Order</button>
                    <button className={`${classes.Button} ${classes.ButtonCancel}`} onClick={this.props.orderCancelled}>Cancel</button>
                </div>
            </Aux>
        )
    }
}
export default OrderSummary;