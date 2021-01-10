import * as actionTypes from './actionTypes';
// Action creators
export const addIngredient  = (name) =>{
    return{
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : name
    }
}
export const removeIngredient  = (name) =>{
    return{
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : name
    }
}
export const clearBurgerBuilderState = () => {
    return {
        type: actionTypes.CLEAR_BURGER_BUILDER_STATE
    }
}