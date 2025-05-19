import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import Image from '../Image/Image';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className='hero'>
            <div className='hero-content'>
                <img src="/logo2.svg" alt="Epoxique logo" className='slikica' />
                <p className='podnaslov'>Ručno radjeni Epoxy Stolovi</p>
                <p className='manjipodnaslov'>Jedinstveni dizajn da ulepša vaš prostor</p>
                <button className='CustomOrderBtn' onClick={() => navigate('/tableconfigurator')}>Narudzbina po meri</button>
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