import React, { useState } from 'react';
import '../styles/Sidebar.css'
function Sidebar({onSelection, selectedOption}) {
  const options = ['Phonepe/GooglePay/UPI', 'Credit/Debit Card', 'Paytm Wallets','Cash on Delivery', 'Net Banking'];

  const handleOptionClick = (option) => {
    onSelection(option);
  };

  return (
    <div className="sidebar">
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option ? 'active' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
