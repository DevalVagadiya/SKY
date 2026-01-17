import React from 'react';
import './Preloader.css';
import logo from '../assets/Logo/3d logo.png';

const Preloader: React.FC = () => {
    return (
        <div className="preloader-container">
            <div className="preloader-content">
                <img src={logo} alt="Loading..." className="preloader-logo" />

                {/* DNA Helix Structure */}
                <div className="dna-loader">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="dna-strand" style={{ '--i': i } as React.CSSProperties}></div>
                    ))}
                </div>

                <div className="loading-text">Loading...</div>
            </div>
        </div>
    );
};

export default Preloader;
