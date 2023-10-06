import React, { useState } from 'react';
import '../styles/PaymentForm.css';

const PaymentForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        nameOnCard: '',
        cardNumber: '',
        expiryMonth: '',
        cvv: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Process the payment data here
        console.log(formData);
      };
    return (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input
              type="text"
              id="nameOnCard"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber"> Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryMonth">Expiry Month:</label>
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              value={formData.expiryMonth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
            <img src={require('../images/mastercard.png')} style={{height : 40, margin: 8}}  />
            <img src={require('../images/rupay.png')} style={{height : 40,margin: 8}}/>
            <img src={require('../images/visa1.png')} style={{height : 40, margin: 8}} />
          </div>
          <button type="submit">Submit</button>
        </form>
    );
}

export default PaymentForm;