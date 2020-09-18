import React from 'react';
import './Map.css'
const Map = (props) => {
    const {map} = props.shipmentInfo;
    console.log("map",map);
    return (
        <div>
            <iframe className="map-style" src={map}></iframe>
        </div>
    );
};

export default Map;