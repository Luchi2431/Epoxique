import React, { useState } from 'react';
import './TableConfigurator.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const TableConfigurator = () => {
    const [formData, setFormData] = useState({
        // Table Specifications
        tableType: '',
        shape: '',
        dimensions: {
            length: '',
            width: '',
            height: ''
        },
        woodType: '',
        epoxyColor: '',
        budget: '',
        additionalNotes: '',
        
        // Contact Information
        name: '',
        email: '',
        phone: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NARUDZBINA,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    table_type: formData.tableType,
                    shape: formData.shape,
                    dimensions: `${formData.dimensions.length}x${formData.dimensions.width}x${formData.dimensions.height}`,
                    wood_type: formData.woodType,
                    epoxy_color: formData.epoxyColor,
                    budget: formData.budget,
                    notes: formData.additionalNotes
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success('Vaš upit je uspešno poslat! Kontaktiraćemo vas uskoro.');
            setFormData({
                tableType: '',
                shape: '',
                dimensions: { length: '', width: '', height: '' },
                woodType: '',
                epoxyColor: '',
                budget: '',
                additionalNotes: '',
                name: '',
                email: '',
                phone: '',
                city: ''
            });
        } catch (error) {
            toast.error('Došlo je do greške. Molimo pokušajte ponovo.');
        }
    };

    return (
        <>
            <Breadcrumbs />
            <div className="configurator-container">
                <h1>Napravite Vaš Savršeni Sto</h1>
                <form onSubmit={handleSubmit} className="quote-form">
                    {/* Table Specifications */}
                    <div className="form-section">
                        <h2>Specifikacije Stola</h2>
                        
                        <div className="form-group">
                            <label>Tip Stola</label>
                            <select name="tableType" value={formData.tableType} onChange={handleChange} required>
                                <option value="">Izaberite tip stola</option>
                                <option value="dining">Trpezarijski Sto</option>
                                <option value="coffee">Klub Sto</option>
                                <option value="console">Konzolni Sto</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Oblik</label>
                            <select name="shape" value={formData.shape} onChange={handleChange} required>
                                <option value="">Izaberite oblik</option>
                                <option value="rectangular">Pravougaoni</option>
                                <option value="round">Okrugli</option>
                                <option value="organic">Organski</option>
                            </select>
                        </div>

                        <div className="dimensions-group">
                            <label>Dimenzije (cm)</label>
                            <div className="dimensions-inputs">
                                <input
                                    type="number"
                                    name="dimensions.length"
                                    placeholder="Dužina"
                                    value={formData.dimensions.length}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="dimensions.width"
                                    placeholder="Širina"
                                    value={formData.dimensions.width}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="dimensions.height"
                                    placeholder="Visina"
                                    value={formData.dimensions.height}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Vrsta Drveta</label>
                            <select name="woodType" value={formData.woodType} onChange={handleChange} required>
                                <option value="">Izaberite vrstu drveta</option>
                                <option value="oak">Hrast</option>
                                <option value="walnut">Orah</option>
                                <option value="maple">Javor</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Boja Epoksida</label>
                            <select name="epoxyColor" value={formData.epoxyColor} onChange={handleChange} required>
                                <option value="">Izaberite boju</option>
                                <option value="clear">Providna</option>
                                <option value="blue">Plava</option>
                                <option value="green">Zelena</option>
                                <option value="custom">Druga (navedite u napomenama)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Budžet (EUR)</label>
                            <select name="budget" value={formData.budget} onChange={handleChange} required>
                                <option value="">Izaberite opseg</option>
                                <option value="500-1000">500-1000</option>
                                <option value="1000-1500">1000-1500</option>
                                <option value="1500+">1500+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Dodatne Napomene</label>
                            <textarea
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                placeholder="Dodatni zahtevi ili pitanja..."
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="form-section">
                        <h2>Vaši Podaci</h2>
                        
                        <div className="form-group">
                            <label>Ime i Prezime</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Telefon</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Grad</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-button">
                        Pošalji Upit
                    </button>
                </form>
            </div>
        </>
    );
};

export default TableConfigurator;
