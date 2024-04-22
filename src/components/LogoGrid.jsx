import React from 'react';
//import '../css/logoComponent.css';
import "../css/logoGrid.css";
import html from "../assets/logos/html-5.png";
import css from "../assets/logos/css-3.png";
import react from "../assets/logos/react.png";
import js from "../assets/logos/js.png";
import nodejs from "../assets/logos/nodejs.png";
import mongo from "../assets/logos/mongodb.svg";
import csharp from "../assets/logos/c-sharp.png";
import unity from "../assets/logos/unity.png";
import php from "../assets/logos/php.png";
import sql from "../assets/logos/sql-server.png";

const IconGrid = () => {

    const icons = [
        {src: html, alt: "HTML5"},
        {src: css, alt: "CSS3"},
        {src: react, alt: "React"},
        {src: js, alt: "JavaScript"},
        {src: nodejs, alt: "Node.js"},
        {src: mongo, alt: "MongoDB"},
        {src: csharp, alt: "C#"},
        {src: unity, alt: "Unity"},
        {src: php, alt: "PHP"},
        {src: sql, alt: "SQL"}
    ];

    return (
        <div className="logoGrid">
            {icons.map((icon, index) => (
                <img className="iconSize"  key={index} src={icon.src} alt={icon.alt} />
            ))}
        </div>
    );
};

export default IconGrid;