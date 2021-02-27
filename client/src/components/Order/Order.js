import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Order.css'
import * as actions from '../../store/actions/index';


class Order extends Component {


    componentDidMount() {
        this.props.onStartInitialize(this.props.match.params.id);
        this.props.onClearBurgerBuilderState();
    }

    render() {
        let orderItems = null;
        if (this.props.orderResult && this.props.orderResult.order) {
            orderItems = this.props.orderResult.order.orderItems.map(orderItem => {
                return (
                    <li className={classes.SummaryItem} key={orderItem.item.ingredient}>
                        <div className={classes.SummarySubItem}>
                            <span className={classes.Summary_SubItem} >{orderItem.item.ingredient}</span>
                            <span>({orderItem.item.priceUnit}):</span>
                        </div>
                        <span className={classes.Amount}>{orderItem.item.amount}</span>
                        <span className={classes.Price}>{orderItem.price}</span>
                    </li>
                )
            })
        }
        return (
            this.props.orderResult && this.props.orderResult.order ?
                <div className={classes.OrderBox}>
                    <h3 className={classes.Header}>Your Order</h3>
                    <div className={classes.Order_Info}>
                        <div className={`${classes.Order_Info_Item}`}>Country: {this.props.orderResult.order.country}</div>
                        <div className={classes.Order_Info_Item}>delivery Method: {this.props.orderResult.order.deliveryMethod}</div>
                        <div className={classes.Order_Info_Item}>email: {this.props.orderResult.order.email}</div>
                        <div className={classes.Order_Info_Item}>fullname: {this.props.orderResult.order.fullname}</div>
                        <div className={classes.Order_Info_Item}>zipcode: {this.props.orderResult.order.zipcode}</div>
                        <div className={`${classes.Order_Info_Item} ${classes.FullWidth}`}>street: {this.props.orderResult.order.street}</div>
                    </div>
                    <ul>
                        {orderItems}
                    </ul>
                    <p className={classes.TotalPrice}>Total Price: <span>${parseFloat(this.props.orderResult.order.totalPrice).toFixed(2)}</span></p>


                    {/* <div className={classes.ButtonSection}>
                        <button className={`${classes.Button} ${classes.ButtonSucces}`} onClick={this.props.checkoutContinued}>Continue</button>
                        <button className={`${classes.Button} ${classes.ButtonCancel}`} onClick={this.props.checkoutCancelled}>Cancel</button>
                    </div> */}
                </div> : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderResult: state.order.order,
        burgerbuilder: state.burgerBuilder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartInitialize: (orderId) => dispatch(actions.initOrderSuccess(orderId)),
        onClearBurgerBuilderState: () => dispatch(actions.clearBurgerBuilderState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);