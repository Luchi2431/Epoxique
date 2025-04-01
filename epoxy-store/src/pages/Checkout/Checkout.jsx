import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css";
import { toast } from 'react-toastify';

const Checkout = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id, quantity }
        });
    };

    const removeFromCart = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        });
        toast.success('Item removed from cart');
    };

    const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    const handleCheckout = () => {
        if (!termsAccepted) {
            toast.error('Please accept the terms first');
            return;
        }
        toast.success('Order placed successfully!');
        dispatch({ type: 'CLEAR_CART' });
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-wrapper">
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart to proceed with checkout</p>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-wrapper">
            <div className="checkout-container">
                <div className="cart-section">
                    <h2>Your Cart</h2>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image_url} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="price">${Number(item.price).toFixed(2)}</p>
                                <div className="quantity-control">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <input 
                                        type="number" 
                                        value={item.quantity} 
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        min="1"
                                    />
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                
                <div className="terms-section">
                    <div className="terms-checkbox">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <label htmlFor="terms">
                            I accept the terms and conditions
                        </label>
                    </div>
                    <button 
                        className={`checkout-button ${!termsAccepted ? 'disabled' : ''}`}
                        disabled={!termsAccepted}
                        onClick={handleCheckout}
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;