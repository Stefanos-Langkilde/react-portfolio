import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <h1>Welcome to My React Portfolio</h1>
            <p>This is the home page of my portfolio website.</p>
            {/* Add your content here */}
            <Footer />
        </>
    );
};

export default Home;