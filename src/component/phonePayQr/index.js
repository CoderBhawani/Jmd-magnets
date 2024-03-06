import React from 'react';
import QRCode from 'react-qr-code';

const PhonePeQRCode = () => {
  // PhonePe QR code ke liye required details
  const phonePeDetails = {
    merchantId: 'Your_Merchant_ID',
    transactionAmount: '100', // Transaction amount in paisa
    orderId: 'Order_ID',
    purpose: 'Goods', // Purpose of transaction (e.g. Goods, Service)
  };

  // PhonePe QR code ke liye URL banayein
  const phonePeURL = `https://phon.pe/${phonePeDetails.merchantId}/${phonePeDetails.transactionAmount}/${phonePeDetails.orderId}/${phonePeDetails.purpose}`;

  return (
    <div>
      {/* React QR code component ka istemal karke QR code generate karein */}
      <QRCode value={phonePeURL} />
    </div>
  );
};

export default PhonePeQRCode;
