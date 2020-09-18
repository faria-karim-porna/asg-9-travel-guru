import React from 'react';
import './BookingForm.css';

const BookingForm = () => {
    return (
        <div className="booking-signup-form">
    <form>
		
		<div className="form-group">
        	<input type="text" className="form-control input-lg" name="origin" placeholder="Origin" required="required"/>
        </div>

		<div className="form-group">
            <input type="text" className="form-control input-lg" name="destnation" placeholder="Destination" required="required"/>
        </div>

        <div className="form-group">
            <input type="date" className="form-control input-lg" name="from" placeholder="From" required="required"/>
        </div>
        <div className="form-group">
            <input type="date" className="form-control input-lg" name="to" placeholder="To" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-lg btn-block signup-btn">Start Booking</button>
        </div>
    </form>
</div>
    );
};

export default BookingForm;