import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css";
import { toast } from 'react-toastify';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import emailjs from '@emailjs/browser';
import Image from '../../components/Image/Image';


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

    const removeFromCart = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        });
        toast.success('Item izbačen iz korpe');
    };

    const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    const handleCheckout = async () => {
        if (!termsAccepted) {
            toast.error('Molim vas prihvatite uslove i odredbe pre nego što nastavite!');
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
                    totalAmount: total 
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
                        `${item.name} ${item.id} (${item.quantity}x) - $${item.price * item.quantity}`
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
            toast.error('Došlo je do greške prilikom slanja email-a!');
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
                    <h2>Vasa Korpa</h2>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <Image src={item.image_url} alt={item.name} size="large" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p><b>Opis:</b> {item.description}</p>
                                <p><b>Dimenzije:</b> {item.dimensions.length}x{item.dimensions.width}x{item.dimensions.height}cm</p>
                                <p className="price">Cena: ${Number(item.price).toFixed(2)}</p>
                                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                    Izbaci iz korpe
                                </button>
                                <div className="cart-summary">
                                    <span>Ukupna cena: </span>
                                    <span>${total.toFixed(2)}</span>  
                                </div>
                            </div>
                        </div>
                    ))}
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