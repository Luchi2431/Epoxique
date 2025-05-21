import { createContext, useReducer, useState } from "react";

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
    
    // Add notification state
    const [notification, setNotification] = useState({
        visible: false,
        productName: '',
    });

    // Custom dispatch function to handle notifications
    const dispatchWithNotification = (action) => {
        dispatch(action);
        
        // If an item is added to cart, show the notification
        if (action.type === 'ADD_TO_CART') {
            setNotification({
                visible: true,
                productName: action.payload.name,
            });
        }
    };

    // Function to close the notification
    const closeNotification = () => {
        setNotification({
            visible: false,
            productName: '',
        });
    };
    
    return (
        <CartContext.Provider value={{
            cart, 
            dispatch: dispatchWithNotification, 
            notification,
            closeNotification
        }}>
            {children}
        </CartContext.Provider>
    );
};