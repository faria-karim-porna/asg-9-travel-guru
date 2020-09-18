import React from 'react';
import './Hotels.css';
import hotel1 from '../../Image/Rectangle 26.png';
import hotel2 from '../../Image/Rectangle 27.png';
import hotel3 from '../../Image/Rectangle 28.png';
const Hotels = (props) => {
    const {hotel_name,hotel_details,price,review_number,hotel_image_id}=props.hotel;
    let image;
    if(hotel_image_id == 1)
    {
        image=hotel1;
    }
    if(hotel_image_id == 2)
    {
        image=hotel2;
    }
    if(hotel_image_id == 3)
    {
        image=hotel3;
    }
    return (
        <div className="hotel">
            
            <div className="image__section">
                <img src={image} alt="" className = "hotel__img" />
            </div>
            <div className = "content__section">
                <h4 className="hotel-name">{hotel_name}</h4>
                <br />
    <p>{hotel_details}</p>
                <p>$ {price}</p>
    <p>{review_number}</p>
            </div>
        </div>
    );
};

export default Hotels;