import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// import * as actionTypes from '../../store/action';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {...};
    // }
    state = {
        // ingredients:{},
        // purchasable: false,
        purchasing: false,
        // totalPrice: 4,
    };

    // addIngredientHandler = (type) => {
    //     let oldVal = this.state.ingredients[type];
    //     let updatedIngredients = { ...this.state.ingredients }
    //     updatedIngredients[type] = oldVal + 1;
    //     const price = +PRICE_INGREDIENTS[type];
    //     let oldPrice = +this.state.totalPrice;
    //     const newPrice = oldPrice + price;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //     this.purchasable(updatedIngredients);
    // };

    // lessIngredientHandler = (type) => {
    //     let oldVal = this.state.ingredients[type];
    //     if (oldVal <= 0) {
    //         return;
    //     }
    //     let updatedIngredients = { ...this.state.ingredients }
    //     updatedIngredients[type] = oldVal - 1;
    //     const price = +PRICE_INGREDIENTS[type];
    //     let oldPrice = +this.state.totalPrice;
    //     const newPrice = oldPrice - price;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //     this.purchasable(updatedIngredients);
    // }

    purchasable(ingredients) {
        const sum = Object.keys(ingredients)  // ==> ["salad","meat",...]
            .map(key => {
                return ingredients[key].amount; // ==> ["2","4",...]
            }).reduce((sum, el) => {
                return sum + el; // ==> 6
            }, 0);
        // this.setState({ purchasable: sum > 0 });
        return sum > 0;
    }


    showModalHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    orderConfirmHandler = () => {
        this.props.clearState();
        this.props.history.push('/checkout');
    }
    // CREATE QUERY STRING PARAMS
    // orderConfirmHandler = () => {
    //     const queryParams = [];
    //     for (let i in this.state.ingredients) {
    //         queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    //     }
    //     // queryParams.push('price=' + this.state.totalPrice);
    //     const queryString = queryParams.join('&');
    //     this.props.history.push({
    //         pathname: '/checkout',
    //         search: '?' + queryString
    //     });
    // }

    render() {
        let disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = parseFloat(disabledInfo[key].price) <= 0;
        }
        // salad:false, meat:true
        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.props.ings} orderCancelled={this.purchaseCancelHandler} orderConfirmed={this.orderConfirmHandler} totalPrice={this.props.price} />
                </Modal>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    add={this.props.onIngredientAdded}
                    less={this.props.onIngredientRemoved}
                    disabledInfo={disabledInfo}
                    amount={this.props.amount}
                    ingredients={this.props.ings}
                    price={this.props.price}
                    purchasable={this.purchasable(this.props.ings)}
                    showModal={this.showModalHandler}
                />
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        amount: state.burgerBuilder.amount,
    }
}
// const mapDispathToProps = dispatch => {
//     return {
//         onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
//         onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
//     }
// }
const mapDispathToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        clearState: () => dispatch(burgerBuilderActions.clearOrderState())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(BurgerBuilder);