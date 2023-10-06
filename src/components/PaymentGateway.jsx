import React,{useState} from "react";
import Sidebar from "./Sidebar";
import PaymentForm from "./PaymentForm";
import '../styles/PaymentGateway.css';

const PaymentGateway = ({ isOpen, onClose }) => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

    return (
    <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
          <div className="payment-card">
            <Sidebar onSelection={handleOptionClick} selectedOption={selectedOption}/>
            {
              selectedOption === 'Credit/Debit Card' ? 
              <PaymentForm /> : 
              <div style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center', justifyContent: 'center', width: '50%'}}>
                <h3 style={{color: '#b30000'}}>Unavailable for now</h3>
                <p>only credit/debit card accepted</p>
              </div>
            }
          </div>  
    </div>  
    );
}

export default PaymentGateway;