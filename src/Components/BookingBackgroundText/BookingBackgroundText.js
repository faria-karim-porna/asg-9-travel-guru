import React from 'react';
import { Link } from 'react-router-dom';
import './BookingBackgroundText.css';
const BookingBackgroundText = (props) => {
    const {id} = props.locationInfo;
    
    return (
        <div>
            <div className="booking__image__title"><p className="booking__location">{props.locationInfo.name}</p><br/><p className="booking__description">{props.locationInfo.details}</p> <Link to ={`/shipment/${id}`}><button className = "booking__btn__style">Booking Now</button></Link> </div>
        </div>
    );
};

export default BookingBackgroundText;