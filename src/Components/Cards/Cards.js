import React from 'react';
import './Cards.css';
import card1 from '../../Image/Sajek.png';
import card2 from '../../Image/Sreemongol.png';
import card3 from '../../Image/sundorbon.png';
import card4 from '../../Image/Rectangle 1.png';
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div>
               <div className = "card__style">
                <div className="card-deck">

                        <div className="card">
                        <Link to='/booking/1'><img className="card-img-top" src={card4} alt="Card image cap"/></Link>
                        </div>

                        <div className="card">
                        <Link to='/booking/2'><img className="card-img-top" src={card2} alt="Card image cap"/></Link>
                        </div>

                        <div className="card">
                        <Link to='/booking/3'><img className="card-img-top" src={card3} alt="Card image cap"/></Link>
                        </div>
                </div>
                </div>
            
        </div>
    );
};

export default Cards;