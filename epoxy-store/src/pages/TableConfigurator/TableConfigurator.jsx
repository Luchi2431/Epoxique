import React, { useState } from 'react';
import './TableConfigurator.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const TableConfigurator = () => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        tableType: '',
        woodType: '',
        epoxyColor: '',
        dimensions: {
            length: '',
            width: '',
            height: ''
        },
        finish: ''
    });

    const updateSelection = (field, value) => {
        setSelections(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const nextStep = () => {
        setStep(prev => prev + 1);
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="config-step">
                        <h2>Select Table Type</h2>
                        <div className="options-grid">
                            <div 
                                className={`option ${selections.tableType === 'dining' ? 'selected' : ''}`}
                                onClick={() => updateSelection('tableType', 'dining')}
                            >
                                <img src="/dining-table.jpg" alt="Dining Table" />
                                <h3>Dining Table</h3>
                            </div>
                            <div 
                                className={`option ${selections.tableType === 'coffee' ? 'selected' : ''}`}
                                onClick={() => updateSelection('tableType', 'coffee')}
                            >
                                <img src="/coffee-table.jpg" alt="Coffee Table" />
                                <h3>Coffee Table</h3>
                            </div>
                            <div 
                                className={`option ${selections.tableType === 'console' ? 'selected' : ''}`}
                                onClick={() => updateSelection('tableType', 'console')}
                            >
                                <img src="/console-table.jpg" alt="Console Table" />
                                <h3>Console Table</h3>
                            </div>
                            <div 
                                className={`color-option ${selections.epoxyColor === 'clear' ? 'selected' : ''}`}
                                style={{ backgroundColor: '#f5f5f5' }}
                                onClick={() => updateSelection('epoxyColor', 'clear')}
                            >
                                <span>Something else</span>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="config-step">
                        <h2>Select Wood Type</h2>
                        <div className="options-grid">
                            <div 
                                className={`option ${selections.woodType === 'oak' ? 'selected' : ''}`}
                                onClick={() => updateSelection('woodType', 'oak')}
                            >
                                <img src="/oak-wood.jpg" alt="Oak" />
                                <h3>Oak</h3>
                            </div>
                            <div 
                                className={`option ${selections.woodType === 'walnut' ? 'selected' : ''}`}
                                onClick={() => updateSelection('woodType', 'walnut')}
                            >
                                <img src="/walnut-wood.jpg" alt="Walnut" />
                                <h3>Walnut</h3>
                            </div>
                            <div 
                                className={`option ${selections.woodType === 'maple' ? 'selected' : ''}`}
                                onClick={() => updateSelection('woodType', 'maple')}
                            >
                                <img src="/maple-wood.jpg" alt="Maple" />
                                <h3>Maple</h3>
                            </div>
                            <div 
                                className={`color-option ${selections.epoxyColor === 'clear' ? 'selected' : ''}`}
                                style={{ backgroundColor: '#f5f5f5' }}
                                onClick={() => updateSelection('epoxyColor', 'something-else-wood')}
                            >
                                <span>Something else</span>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="config-step">
                        <h2>Select Epoxy Color</h2>
                        <div className="color-options">
                            <div 
                                className={`color-option ${selections.epoxyColor === 'blue' ? 'selected' : ''}`}
                                style={{ backgroundColor: '#0077be' }}
                                onClick={() => updateSelection('epoxyColor', 'blue')}
                            >
                                <span>Ocean Blue</span>
                            </div>
                            <div 
                                className={`color-option ${selections.epoxyColor === 'green' ? 'selected' : ''}`}
                                style={{ backgroundColor: '#2e8b57' }}
                                onClick={() => updateSelection('epoxyColor', 'green')}
                            >
                                <span>Forest Green</span>
                            </div>
                            <div 
                                className={`color-option ${selections.epoxyColor === 'clear' ? 'selected' : ''}`}
                                style={{ backgroundColor: '#f5f5f5' }}
                                onClick={() => updateSelection('epoxyColor', 'clear')}
                            >
                                <span>Clear</span>
                            </div>
                            <div 
                                className={`color-option ${selections.epoxyColor === 'clear' ? 'selected' : ''}`}
                                style={{ backgroundColor: '#f5f5f5' }}
                                onClick={() => updateSelection('epoxyColor', 'something-else-color')}
                            >
                                <span>Something else</span>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="config-step">
                        <h2>Enter Dimensions</h2>
                        <div className="dimensions-form">
                            <div className="dimension-input">
                                <label>Length (cm)</label>
                                <input 
                                    type="number" 
                                    value={selections.dimensions.length}
                                    onChange={(e) => setSelections(prev => ({
                                        ...prev,
                                        dimensions: { ...prev.dimensions, length: e.target.value }
                                    }))}
                                />
                            </div>
                            <div className="dimension-input">
                                <label>Width (cm)</label>
                                <input 
                                    type="number"
                                    value={selections.dimensions.width}
                                    onChange={(e) => setSelections(prev => ({
                                        ...prev,
                                        dimensions: { ...prev.dimensions, width: e.target.value }
                                    }))}
                                />
                            </div>
                            <div className="dimension-input">
                                <label>Height (cm)</label>
                                <input 
                                    type="number"
                                    value={selections.dimensions.height}
                                    onChange={(e) => setSelections(prev => ({
                                        ...prev,
                                        dimensions: { ...prev.dimensions, height: e.target.value }
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="configurator-container">
            <Breadcrumbs />
            <div className="progress-bar">
                <div className="progress" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
            <div className="configurator-content">
                {renderStep()}
                <div className="navigation-buttons">
                    {step > 1 && (
                        <button onClick={prevStep} className="prev-button">
                            Previous
                        </button>
                    )}
                    {step < 4 ? (
                        <button onClick={nextStep} className="next-button">
                            Next
                        </button>
                    ) : (
                        <button className="submit-button">
                            Get Quote
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TableConfigurator;
