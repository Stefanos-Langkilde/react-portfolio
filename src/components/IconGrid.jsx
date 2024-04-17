import React from 'react';
//import '../css/logoComponent.css';
import "../css/footer.css";

const IconGrid = ({ icons }) => {
    return (
        <div className="iconGrid">
            {icons.map((icon, index) => (
                <a className="logoSize" href={icon.link} target="_blank" rel="noreferrer">
                    <img  key={index} src={icon.src} alt={icon.alt} />
                </a> 
            ))}
        </div>
    );
};

export default IconGrid;