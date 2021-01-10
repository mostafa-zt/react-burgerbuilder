import React, { Component } from 'react';
import classes from './CheckoutSummary.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class CheckoutSummary extends Component {

    render() {
        let ingredients = [];
        for (let ingredientName in this.props.ingredients) {
            ingredients.push({ name: ingredientName, amount: this.props.ingredients[ingredientName].amount });
        }
        const checkoutSummary = ingredients.map(ig => {
            return (
                <li className={classes.SummaryItem} key={ig.name}>
                    <span className={classes.Summary_SubItem} >{ig.name} :</span> <span>{ig.amount}</span>
                </li>
            )
        });
        return (
            <Aux>
                <h3 className={classes.Header}>Checkout Summary</h3>
                <ul>
                    {checkoutSummary}
                </ul>
                <p className={classes.TotalPrice}>Total Price: <span>${parseFloat(this.props.totalPrice).toFixed(2)}</span></p>
                <div className={classes.ButtonSection}>
                    <button className={`${classes.Button} ${classes.ButtonSucces}`} onClick={this.props.checkoutContinued}>Continue</button>
                    <button className={`${classes.Button} ${classes.ButtonCancel}`} onClick={this.props.checkoutCancelled}>Cancel</button>
                </div>
            </Aux>
        )
    }
}
export default CheckoutSummary;