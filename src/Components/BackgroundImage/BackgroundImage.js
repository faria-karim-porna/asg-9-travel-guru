import React from 'react';
import './BackgroundImage.css';
import backgroundImage from '../../Image/Rectangle 1.png';
import BackgroundText from '../BackgroundText/BackgroundText';
import Cards from '../Cards/Cards';

const BackgroundImage = () => {
    return (
        <div>

            <div className="image">
                <img className="image__img" src={backgroundImage} alt="Bricks"/>
                
                <div className="image__overlay image__overlay--primary">
                    <BackgroundText></BackgroundText>
                    <Cards></Cards>
                </div>
            </div>
            
        </div>
    );
};

export default BackgroundImage;