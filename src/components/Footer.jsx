import React from 'react';
import GitHub from '../assets/images/GitHub-logo.png';
import linkedin from '../assets/images/linkedin-icon.png';
import IconGrid from './IconGrid';
import '../css/footer.css';

const Footer = () => {
    const icons = [
        {src: GitHub, alt: "Link to Github", link:"https://github.com/Stefanos-Langkilde"},
        {src: linkedin, alt: "Link to Linkedin", link:"https://www.linkedin.com/in/stefanos-karambelas-langkilde/"}
    ];

    return (
        <footer>
            <div className="center-content">
                <p>Stefanos K. Langkilde</p>
                <p>Email: zinzpawn@mail.com</p>
                <IconGrid icons={icons} />
            </div>
        </footer>
    );
};

export default Footer;