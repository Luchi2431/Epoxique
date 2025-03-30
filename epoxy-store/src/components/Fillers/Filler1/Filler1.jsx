import React from 'react';
import './Filler1.css'; // Assuming you will add some styles in this CSS file

const Filler1 = () => {
    return (
        <div className="filler-container">
            <div className="filler-item">
                <div className="icon">🔧</div>
                <h3>Configure</h3>
                <p>Configure your table according to your personal preferences & in your desired custom dimensions.</p>
            </div>
            <div className="filler-item">
                <div className="icon">🌳</div>
                <h3>Explore</h3>
                <p>Explore our wide selection of precious woods (oak, olive, walnut, elm, chestnut, and more).</p>
            </div>
            <div className="filler-item">
                <div className="icon">🛡️</div>
                <h3>Quality</h3>
                <p>Our epoxy resin is non-toxic and comes with a 10-year manufacturer’s warranty against yellowing.</p>
            </div>
            <div className="filler-item">
                <div className="icon">🖼️</div>
                <h3>Visualize</h3>
                <p>You can place your virtual table in the desired location within the room and visualize it in 3D before making a purchase.</p>
            </div>
        </div>
    );
};

export default Filler1;