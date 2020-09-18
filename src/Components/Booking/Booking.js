import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../Image/Rectangle 1.png';
import fakeData from '../../fakeData';
import './Booking.css';

import BookingBackgroundText from '../BookingBackgroundText/BookingBackgroundText';
import BookingForm from '../BookingForm/BookingForm';
const Booking = () => {
    const {bookingID} = useParams();
    const locationInfo = fakeData.find(location => location.id == bookingID);
    
    return (
        <div>
            <div className="booking__image">
                <img className="booking__image__img" src={image} alt="Bricks"/>
                
                <div className="booking__image__overlay booking__image__overlay--primary">
                    <BookingBackgroundText locationInfo={locationInfo}></BookingBackgroundText>
                    <BookingForm></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default Booking;