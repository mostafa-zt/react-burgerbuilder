import React, { Component } from "react";
import classes from './ContactData.css';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';



class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    require: true,
                    minLength: 1,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    require: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'express', displayValue: 'Express(Fastest)' },
                        { value: 'normal', displayValue: 'Normal' }
                    ],
                    placeholder: 'Delivery Method'
                },
                value: 'express',
                validation: {},
                valid: true,
                touched: false
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const fromData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            fromData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const orderItems = Object.keys(this.props.ings)
            .map(ingredientName => {
                return {
                    item: {
                        ingredient: ingredientName,
                        amount: this.props.ings[ingredientName].amount,
                        priceUnit: this.props.ings[ingredientName].priceUnit
                    },
                    price: parseFloat(this.props.ings[ingredientName].price).toFixed(2)
                }
            });
        const order = {
            fullname: fromData.name,
            street: fromData.street,
            zipcode: fromData.zipCode,
            country: fromData.country,
            email: fromData.email,
            orderItems: orderItems,
            totalPrice: parseFloat(this.props.price).toFixed(2),
            success: true,
            deliveryMethod: fromData.deliveryMethod
        }
        this.props.onOrderBurger(order);
    }

    checkValidaty = (value, rules) => {
        let isValid = true;
        if (rules.require) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidaty(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm });
    }

    redirect = () => {
        setTimeout(() => {
            this.props.history.push(`/order/${this.props.orderResult.order._id}`);
        }, 2000);
    }

    // inputErrorHandeler = (messages) => {
    //     const updatedOrderForm = { ...this.state.orderForm }
    //     for (let message in messages) {
    //         const updatedFormElement = { ...updatedOrderForm[message.param] };
    //         updatedFormElement.valid = false;
    //         updatedOrderForm[message.param] = updatedFormElement;
    //         console.log('updatedOrderForm=========>');
    //         console.log(updatedOrderForm);
    //     }
    //     this.setState({ orderForm: updatedOrderForm })
    // }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let msg = null;
        if (this.props.orderResult) {
            msg = (
                this.props.orderResult.success ?
                    <div className={`${classes.MessageBox} ${classes.Green}`}>
                        {this.props.orderResult.message}
                        {this.redirect()}
                    </div>
                    : <div className={`${classes.MessageBox} ${classes.Red}`}>
                        {
                            this.props.orderResult.messages.map((message, i) => {

                                return (<div className={classes.ErrorItem} key={i}>
                                    <span className={classes.ErrorParam}>{message.param}: </span>
                                    <span className={classes.MessageText}>{message.msg}</span>
                                </div>)

                            })
                        }
                    </div>

            )
        }

        return (
            <div className={classes.ContactForm}>
                <h4 className={classes.HeaderForm}>Contact Form</h4>
                {msg}
                <form>
                    {
                        formElementArray.map(formElement => {
                            let inputElement = null;
                            const inputeClasses = [classes.InputElement];
                            if ((!formElement.valid) && formElement.touched) {
                                inputeClasses.push(classes.Invalid);
                            }
                            switch (formElement.config.elementType) {
                                case ('input'):
                                    inputElement = (<input key={formElement.id}
                                        className={`${classes.InputElement} ${!this.state.orderForm[formElement.id].valid && this.state.orderForm[formElement.id].validation && this.state.orderForm[formElement.id].touched ? classes.Invalid : ''}`}
                                        value={formElement.config.value}
                                        placeholder={formElement.config.elementConfig.placeholder}
                                        touched={formElement.touched}
                                        type={formElement.config.elementConfig.type}
                                        onChange={(event) => this.inputChangeHandler(event, formElement.id)} />)
                                    break;
                                case ('select'):
                                    inputElement = (
                                        <select
                                            className={`${classes.InputElement} ${!this.state.orderForm[formElement.id].valid && this.state.orderForm[formElement.id].validation && this.state.orderForm[formElement.id].touched ? classes.Invalid : ''}`}
                                            onChange={(event) => this.inputChangeHandler(event, formElement.id)}
                                            key={formElement.id}
                                            value={formElement.config.value}>
                                            {
                                                formElement.config.elementConfig.options.map((option, i) => (
                                                    <option key={i} value={option.value}>{option.displayValue}</option>
                                                ))
                                            }
                                        </select>)
                                    break;
                                default:
                                    break;
                            }
                            return inputElement;
                        })
                    }
                    <div className={classes.ButtonSection}>
                        <button onClick={this.orderHandler} className={`${classes.Button} ${classes.ButtonSucces}`}>Order</button>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        orderResult: state.order.order
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactData);