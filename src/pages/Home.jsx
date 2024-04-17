import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/content.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className="content">
                <h1>Welcome to My React Portfolio</h1>
                <p>This is the home page of my portfolio website.</p>
                {/* Add your content here */}
            </div>
            <Footer />
        </>
    );
};

export default Home;