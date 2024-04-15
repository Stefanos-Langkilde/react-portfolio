import React from 'react';
import GitHub from '../assets/images/GitHub-logo.png';
import linkedin from '../assets/images/linkedin-icon.png';
import LogoComponent from './logoComponent';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <p>© 2022 Stefanos K. Langkilde</p>
            <p>Email: zinzpawn@mail.com</p>
            <div className="iconGrid">
                <LogoComponent logoSource={GitHub} altText="Link to Github" siteLink="https://github.com/Stefanos-Langkilde" />
                <LogoComponent logoSource={linkedin} altText="Link to Linkedin" siteLink="https://www.linkedin.com/in/stefanos-karambelas-langkilde/" />
            </div>
        </footer>
    );
};

export default Footer;