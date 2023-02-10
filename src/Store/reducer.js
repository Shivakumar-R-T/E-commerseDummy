import { initialState } from "./reduxstore";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_DECREASE_ITEM } from './actions'


export const reducer = (state = initialState, action) => {
    let neworiginalList = [];
    let currentItem;
    let newUpdatedCart = [];

    switch (action.type) {
        case ADD_TO_CART:
            neworiginalList = state.originalList.map((product) => {
                if (product.id === action.payload.id) {
                    product.availableQuantity = parseInt(product.availableQuantity) - 1;
                    currentItem = { ...product };

                }
                return product;

            })
            delete currentItem.availableQuantity;
            currentItem.quantity = 1;

            return {
                ...state,
                originalList: [...neworiginalList],
                cart: [...state.cart, currentItem]
            }

        case REMOVE_FROM_CART:
            newUpdatedCart = state.cart.filter((cartItem) => {
                if (cartItem.id != action.payload.id)
                    return cartItem;

                else
                    currentItem = { ...cartItem };
            })
            neworiginalList = state.originalList.map((product) => {
                if (product.id === currentItem.id) {
                    product.availableQuantity = product.availableQuantity + currentItem.quantity
                }
                return product;
            })
            return {
                ...state,
                cart: [...newUpdatedCart],
                originalList: [...neworiginalList]
            }

        case INCREASE_DECREASE_ITEM:
            newUpdatedCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    currentItem = { ...cartItem };
                    cartItem.quantity = action.payload.newquantity;
                }
                return cartItem;
            })
            neworiginalList = state.originalList.map((product) => {
                if (product.id === action.payload.id) {
                    product.availableQuantity = action.payload.newquantity > currentItem.quantity ? product.availableQuantity - 1 : product.availableQuantity + 1;
                }
                return product;
            })

            return {...state,
            cart:[...newUpdatedCart],
        originalList:[...neworiginalList]
    }


        default:
            return state;
    }

}