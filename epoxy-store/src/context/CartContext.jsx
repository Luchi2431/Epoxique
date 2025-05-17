import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
    let newState;
    switch(action.type) {
        case 'ADD_TO_CART':
            //Check if item already exists in cart
            const existingItem = state.find(item => item.id === action.payload.id);
            if(existingItem) {
                //If item exists dont add it just return current state
                return state;
            }else {
                //Add new item with quantity of 1
                newState = [...state, {...action.payload, quantity: 1}];
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            }
            
        case 'REMOVE_FROM_CART':
            newState = state.filter(item=> item.id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(newState));
            return newState;

        case 'CLEAR_CART':
            localStorage.removeItem('cart');
            return [];

        case 'INITIALIZE_CART':
            return action.payload;
            
        default:
            return state;    
    }
};

export const CartProvider = ({children}) => {
    // Initialize cart from localStorage
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    });
    
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};