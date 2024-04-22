import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/content.css';
import '../css/home.css';
import LogoGrid from "../components/LogoGrid";


const Home = () => {

    return (
        <>
            <Header />
                <div className="content">
                    <h1>Welcome to My React Portfolio</h1>
                    <h3>My name is Stefan Langkilde</h3>
                    <div className="intro">
                        <p>My name is Stefan and I have a background in Multimediadesign, a bachelor in english minoring in Japanese studies, 
                            and I'm currently studying Webdevelopment.</p>
                        <p>I have a passion for learning new things and I'm always looking for new challenges, like making this portfolio with React.</p>
                        <p>Since I sit in front of the computer a lot, I have chosen a hobby where I get to move around a lot and it's HEMA fencing.
                            I have been practicing HEMA for about two years now and I'm currently practicing with a longsword. The special part about this hobby is that we are using
                            historical manuals to learn the techniques and the fighting style of the medieval knights.
                        </p>
                    </div>
                    <div className="skills">
                        <h3>My skills</h3>
                        <p>Here are some of the skills I have learned so far:</p>
                        <LogoGrid />
                    </div>
                </div>
            <Footer />
        </>
    );
};

export default Home;