import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Hotels from '../Hotels/Hotels';
import Map from '../Map/Map';
import './Shipment.css'
import { UserContext } from '../../App';
const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {shipmentID} = useParams();
     const shipmentInfo = fakeData.find(shipment => shipment.id == shipmentID);
     const {hotels} = shipmentInfo;
     
    return (
        <div className = "shipment-mainPage-container">
            <div className="shipment-container row mr-auto ml-auto">
                    {
                        hotels.map(hotel => <Hotels hotel = {hotel}></Hotels>)
                    }
            </div>

            <div className = "cart-container w-25 mr-auto ml-auto mt-3">
                <Map shipmentInfo={shipmentInfo}></Map>
            </div>
            
        </div>
    );
};

export default Shipment;