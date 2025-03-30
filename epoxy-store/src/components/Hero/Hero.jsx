import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>Rucno radjeni Epoxy Stolovi</h1>
                <p>Jedinstveni dizajn da ulepsa vas prostor</p>
                <button className='CustomOrderBtn' onClick={() => navigate('/tableconfigurator')}>Custom Order</button>
                <button 
                    className='CollectionBtn' 
                    onClick={() => navigate('/collection')}
                >
                    Vidi Kolekciju
                </button>
            </div>
        </section>
    )
}

export default Hero;