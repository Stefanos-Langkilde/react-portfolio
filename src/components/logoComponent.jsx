import React from 'react';
import '../css/logoComponent.css';

const LogoComponent = ({logoSource, altText, siteLink}) => {

    return (
        <div className="logoSize">
            <a href={siteLink} target="_blank" rel="noreferrer">
                <img src={logoSource} alt={altText} />
            </a>
        </div>
    );
};

export default LogoComponent;