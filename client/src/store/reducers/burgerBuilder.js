import * as actionTypes from '../actions/actionTypes';


// const initialState = {
//     ingredients: {
//         salad: 0,
//         bacon: 0,
//         cheese: 0,
//         meat: 0
//     },
//     totalPrice: 4
// }
const initialState = {
    ingredients: {
        salad: {
            price: 0,
            amount: 0,
            priceUnit: 0.47
        },
        bacon: {
            price: 0,
            amount: 0,
            priceUnit: 0.87
        },
        cheese: {
            price: 0,
            amount: 0,
            priceUnit: 0.34
        },
        meat: {
            price: 0,
            amount: 0,
            priceUnit: 1.12
        }
    },
    totalPrice: 4
}
// const PRICE_INGREDIENTS = {
//     salad: 0.47,
//     bacon: 0.87,
//     meat: 1.79,
//     cheese: 0.43,
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: {
                        amount: state.ingredients[action.ingredientName].amount + 1,
                        price: parseFloat(state.ingredients[action.ingredientName].price) + state.ingredients[action.ingredientName].priceUnit,  //PRICE_INGREDIENTS[action.ingredientName]
                        priceUnit: state.ingredients[action.ingredientName].priceUnit
                    }
                },
                // val: state.ingredients[action.ingredientName].amount,
                totalPrice: parseFloat(state.totalPrice) + state.ingredients[action.ingredientName].priceUnit  //PRICE_INGREDIENTS[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: {
                        amount: state.ingredients[action.ingredientName].amount - 1,
                        price: parseFloat(state.ingredients[action.ingredientName].price) > 0 ? parseFloat(state.ingredients[action.ingredientName].price).toFixed(2) - state.ingredients[action.ingredientName].priceUnit : 0,
                        priceUnit: state.ingredients[action.ingredientName].priceUnit
                    }
                },
                // val: 2,
                // totalPrice: state.totalPrice  //PRICE_INGREDIENTS[action.ingredientName]
                totalPrice: parseFloat(state.totalPrice) - state.ingredients[action.ingredientName].priceUnit
            };
        case actionTypes.CLEAR_BURGER_BUILDER_STATE:
            return { ...state, ...initialState }
        default:
            return state;
    }
}

export default reducer;