import { createContext,useContext,useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            // Add new item to cart
            return [...state,action.payload];
        case 'REMOVE_FROM_CART':
            // Remove item from cart
            return state.filter(item=>item.id !==action.payload);
        case 'UPDATE_QUANTITY':
            // Update item quantity
            return state.map(item=>item.id === action.payload.id
                ? {...item,quantity:action.payload.quantity}
                : item
            );
        default:
            return state;    
    }
};


export const CartProvider = ({children}) => {
    const [cart,dispatch] = useReducer(cartReducer,[]);
    return (
        <CartContext.Provider value={({cart,dispatch})}>
            {children}
        </CartContext.Provider>
    );
};

