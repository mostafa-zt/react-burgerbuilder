import React, { Component } from 'react';
import classes from './Checkout.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Burger from '../../../components/Burger/Burger';
import CheckoutSummary from '../../../components/Burger/CheckoutSammary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {

    // state = {
    //     ingredients: null
    // }

    // EXTRACT STRING QUERY DATA
    // componentWillMount() {
    //     console.log("URLSearchParams=========>");
    //     console.log(this.props.location);
    //     console.log(this.props);
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     for (let param of query.entries()) {
    //         // ['salad','1']
    //         ingredients[param[0]] = +param[1];
    //     }
    //     this.setState({
    //         ingredients: ingredients
    //     })
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {

        return (
            <Aux>
                <Burger ingredients={this.props.ings} />
                <div className={classes.Checkout}>
                    <CheckoutSummary ingredients={this.props.ings}
                        totalPrice={this.props.price}
                        checkoutContinued={this.checkoutContinuedHandler}
                        checkoutCancelled={this.checkoutCancelledHandler} />
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
                    {/* <Route
                        path={this.props.match.path + '/contact-data'}
                        render={() => (<ContactData ingredients={this.props.ings} />)} /> */}
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);