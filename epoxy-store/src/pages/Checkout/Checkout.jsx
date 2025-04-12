import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css";
import { toast } from 'react-toastify';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import emailjs from '@emailjs/browser';


const Checkout = () => {
    const { cart, dispatch } = useContext(CartContext);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [customerInfo,setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: ''
    });

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
        toast.success('Item izbacen iz korpe');
    };

    const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    const handleCheckout = async () => {
        if (!termsAccepted) {
            toast.error('Molim vas prihvatite uslove i odredbe pre nego sto nastavite!');
            return;
        }

        if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address || !customerInfo.city || !customerInfo.postalCode)  {
            toast.error('Molimo popunite sva obavezna polja');
            return;
        }
        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerInfo: {
                        name: customerInfo.name,
                        email: customerInfo.email,
                        phone: customerInfo.phone,
                        address: customerInfo.address,
                        city: customerInfo.city,
                        postalCode: customerInfo.postalCode,
                    },
                    items: cart.map(item => ({
                        id: item.id,
                        quantity: item.quantity,
                        price: item.price
                    })),
                    totalAmount: total + 500
                })
            });
            if(!response.ok) {
                throw new Error("Failed to save order");
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NARUDZBINA,
                {
                    to_name: 'Admin',
                    customer_name: customerInfo.name,
                    customer_email: customerInfo.email,
                    customer_phone: customerInfo.phone,
                    customer_address: customerInfo.address,
                    customer_city: customerInfo.city,
                    customer_postal_code: customerInfo.postalCode,
                    order_details: cart.map(item =>
                        `${item.name} (${item.quantity}x) - $${item.price * item.quantity}`
                    ).join('\n'),
                    total_amount: `$${total.toFixed(2)}`
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success('Narudžbina uspešno kreirana!');
            dispatch({ type: 'CLEAR_CART' });
            setCustomerInfo({
                name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                postalCode: ''
            });
            setTermsAccepted(false);
        }catch(error) {
            console.error('Error sending email:', error);
            toast.error('Doslo je do greske prilikom slanja email-a!');
        }
        
    };

    if (cart.length === 0) {
        return (
            <>
            <Breadcrumbs />
            <div className="checkout-wrapper">
                
                <div className="empty-cart">
                    <h2>Korpa je prazna</h2>
                    <p>Dodaj neke stolove u tvoju korpu da bi nastavio na placanje</p>
                </div>
            </div>
            </>
        );
    }

    return (
        <> 
        <Breadcrumbs/>
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
                                    Izbaci iz korpe
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Ukupno:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Postarina:</span>
                            <span>500</span>
                        </div>
                        <div className="summary-row total">
                            <span>Ukupno:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className='customer-info'>
                    <h3>Informacije o kupcu</h3>
                    <input
                        type="text"
                        placeholder='Ime i prezime *'
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        required
                    />
                    <input
                        type='email'
                        placeholder='Email *'
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        required
                    />
                    <input
                        type='tel'
                        placeholder='Telefon *'
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Adresa *'
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Grad *'
                        value={customerInfo.city}
                        onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Poštanski broj *'
                        value={customerInfo.postalCode}
                        onChange={(e) => setCustomerInfo({...customerInfo, postalCode: e.target.value})}
                        required
                    />
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
                            Prihvatam uslove i odredbe
                        </label>
                    </div>
                    <button 
                        className={`checkout-button ${!termsAccepted ? 'disabled' : ''}`}
                        disabled={!termsAccepted}
                        onClick={handleCheckout}
                    >
                        Nastavi na placanje
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Checkout;