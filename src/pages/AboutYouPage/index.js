import React from 'react';
import './css/index.scss';
import cat1 from '../../assets/images/cat1.png';
import cat2 from '../../assets/images/cat2.png';
import cat3 from '../../assets/images/cat3.png';

const AboutYou = () => {
    return (
        <div className="about-you">
            <h1 className="title">About you</h1>
            <h2 className="subtitle">o tebe ser nnan</h2>
            <p className="description">
                text about hoviktext about hoviktext about hoviktext about hoviktext about hovik
                text about hoviktext about hoviktext about hoviktext about hoviktext about hovik
                text about hoviktext about hoviktext about hoviktext about hoviktext about hovik
            </p>
            <div className="info-box">
                <div className="info-item">
                    <div className="icon-circle">
                        <img src={cat1} alt="Cat" className="icon" />
                    </div>
                    <p className="info-text">
                        text about hoviktext about hoviktext about hoviktext about hovik
                    </p>
                </div>
                <div className="info-item">
                    <div className="icon-circle">
                        <img src={cat2} alt="Rabbit" className="icon" />
                    </div>
                    <p className="info-text">
                        text about hoviktext about hoviktext about hoviktext about hovik
                    </p>
                </div>
                <div className="info-item">
                    <div className="icon-circle">
                        <img src={cat3} alt="Another Cat" className="icon" />
                    </div>
                    <p className="info-text">
                        text about hoviktext about hoviktext about hoviktext about hovik
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutYou;
