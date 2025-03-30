import React, { useState } from 'react';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import "./Checkout.css";
import * as Yup from 'yup';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const checkoutSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    address: Yup.string().required('Required'),
    phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Required'),
});


const Checkout = () => {
    const {cart,dispatch} = useContext(CartContext);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const updateQuantity = (id, quantity) => {
        dispatch({ 
          type: 'UPDATE_QUANTITY', 
          payload: { id, quantity: Math.max(1, quantity) } 
        });
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="checkout-wrapper">
            <div className="checkout-container">
                <div className="cart-section">
                    <h2>Korpa</h2>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="price">€{item.price.toFixed(2)}</p>
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
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Međuzbir:</span>
                            <span>€{total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Dostava:</span>
                            <span>Besplatna</span>
                        </div>
                        <div className="summary-row total">
                            <span>Ukupno:</span>
                            <span>€{total.toFixed(2)}</span>
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
                            Pročitao/la sam i prihvatam uslove kupovine
                        </label>
                    </div>
                    <button 
                        className={`checkout-button ${!termsAccepted ? 'disabled' : ''}`}
                        disabled={!termsAccepted}
                    >
                        Nastavi na plaćanje
                    </button>
                </div>
            </div>
            
            <div className="popular-categories-section">
                <PopularCategories />
            </div>
        </div>
    );
};

export default Checkout;