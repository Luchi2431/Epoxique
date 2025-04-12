import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
    let newState;
    switch(action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.payload.id);
            if(existingItem) {
                newState = state.map(item=>
                    item.id === action.payload.id
                    ? {...item,quantity: item.quantity+1}
                    : item
                );
            }else {
                newState = [...state, {...action.payload, quantity: 1}];
            }
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;
            
        case 'REMOVE_FROM_CART':
            newState = state.filter(item=> item.id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(newState));
            return newState;
            
        case 'UPDATE_QUANTITY':
            newState = state.map(item =>
                item.id === action.payload.id
                ? {...item,quantity: action.payload.quantity}
                : item
            );
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

    // Sync cart with localStorange on changes

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);
    
    // Fix: Remove extra parentheses in the value prop
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};