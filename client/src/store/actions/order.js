import * as actionTypes from './actionTypes';
import axios from 'axios';

export const purchaseBurgerSuccess = (response, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        order: response
    };
};
export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};
export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}
export const purchaseBurger = (orderData) => {
    return dispatch => {
        // dispatch(purchaseBurgerStart());
        axios.post('/api/order', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            });
    }
};

export const initOrderSuccess = (orderId) => {
    return dispatch => {
        axios.get(`/api/getorder/?orderId=${orderId}`)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data, null));
            });
    }
}

export const clearOrderState = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}
