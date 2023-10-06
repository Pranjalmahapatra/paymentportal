import React, {useState} from 'react';
import '../styles/PurchasePage.css'; // Include your CSS file for styling
import PaymentGateway from './PaymentGateway';

function PurchasePage() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };
  // Dummy data for product and delivery information
  const product = {
    name: 'MacBook pro',
    description: 'The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop.',
    imageSrc: './images/macbook.jpg', // Replace with your image source
    price: 1500, // Replace with the actual product price
  };

  const deliveryAddress = {
    name: 'Pranjal Mahapatra',
    address: 'World trade center, Tirumalai Nagar, Perungudi',
    city: 'Chennai',
    state: 'Tamil Nadu',
    zipCode: '600096',
  };

  const totalPrice = product.price;

  const handlePurchase = () => {
    // Handle the purchase action here
    setIsOverlayOpen(true);
    console.log('Purchase button clicked');
  };

  return (
    <div className="App">
      <nav>
        <h1>Payments</h1>
      </nav>
      <div className="main-content">
        <div className="left-column">
        <div className="delivery-address">
            <h3 className="section-title">Delivery Address</h3>
            <div className="address-details">
                <p className="address-name">{deliveryAddress.name}</p>
                <p className="address-line">{deliveryAddress.address}</p>
                <p className="address-line">
                {deliveryAddress.city}, {deliveryAddress.state} {deliveryAddress.zipCode}
                </p>
            </div>
        </div>
        </div>
        <div className="right-column">
          <img src={require('../images/macbook.jpg')} style={{height : 180}} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="total-price">
            <h3>Total Price:</h3>
            <p>${totalPrice}</p>
          </div>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      </div>
      <PaymentGateway isOpen={isOverlayOpen} onClose={handleCloseOverlay} />
    </div>
  );
}

export default PurchasePage;
