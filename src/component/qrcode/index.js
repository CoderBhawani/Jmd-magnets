import React, { useState } from 'react';
import QRCode from 'react-qr-code'; // Import the QR code library
import "./index.css"

const phoneNumber = '9'; // Fixed phone number

const QRCodeComponent = () => {
    const [qrValue, setQRValue] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [editMode, setEditMode] = useState(false); // State to control edit mode
    const [showFileInput, setShowFileInput] = useState(false); // State to control visibility of file input

    const handleWhatsAppShare = () => {
        if (uploadedImage) {
            const message = 'Check out my payment screenshot!';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}&image=${encodeURIComponent(uploadedImage)}`;
            window.open(whatsappUrl, '_blank'); // Open the WhatsApp shareable URL in a new tab
        } else {
            alert('Please upload an image first.');
        }
    };

    const handleUploadImage = (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setUploadedImage(imageUrl);
            setQRValue(imageUrl);
            setEditMode(true); // Enable edit mode after uploading the image
        }
    };

    return (
        <div className="qr-code-container">
            {/* QR Code */}
            <div className="qr-code">
                <QRCode value={qrValue} />
            </div>
            
            {/* Input for uploading screenshot */}
            <div className="upload-screenshot">
                {/* Button to trigger file input */}
                <button onClick={() => setShowFileInput(true)}>Upload Photo</button>
                {/* File input */}
                {showFileInput && (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUploadImage}
                    />
                )}
            </div>

            {/* Display the uploaded image and provide edit option */}
            {editMode && (
                <div className="uploaded-image-container">
                    <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
                    <button onClick={handleWhatsAppShare}>Share to Seller on WhatsApp</button>
                </div>
            )}
        </div>
    );
};

export default QRCodeComponent;

  



// import React, { useState, useRef } from 'react';
// import QRCode from 'react-qr-code'; // Import the QR code library
// import "./index.css"

// const phoneNumber = '9'; // Fixed phone number

// const QRCodeComponent = () => {
//     const [qrValue, setQRValue] = useState('');
//     const [uploadedImage, setUploadedImage] = useState(null);
//     const [editMode, setEditMode] = useState(false); // State to control edit mode
//     const fileInputRef = useRef(null); // Create a reference to the file input element

//     const handleWhatsAppShare = () => {
//         if (uploadedImage) {
//             const message = 'Check out my payment screenshot!';
//             const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}&image=${encodeURIComponent(uploadedImage)}`;
//             window.open(whatsappUrl, '_blank'); // Open the WhatsApp shareable URL in a new tab
//         } else {
//             alert('Please upload an image first.');
//         }
//     };

//     const handleUploadImage = (event) => {
//         const imageFile = event.target.files[0];
//         if (imageFile) {
//             const imageUrl = URL.createObjectURL(imageFile);
//             setUploadedImage(imageUrl);
//             setQRValue(imageUrl);
//             setEditMode(true); // Enable edit mode after uploading the image
//         }
//     };

//     return (
//         <div className="qr-code-container">
//             {/* QR Code */}
//             <div className="qr-code">
//                 <QRCode value={qrValue} />
//             </div>
            
//             {/* Input for uploading screenshot */}
//             <div className="upload-screenshot">
//                 {/* Hidden file input */}
//                 <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleUploadImage}
//                     style={{ display: 'none' }} // Hide the file input
//                 />
//                 {/* Button to trigger file input */}
//                 <button onClick={() => fileInputRef.current.click()}>Upload Photo</button>
//             </div>

//             {/* Display the uploaded image and provide edit option */}
//             {editMode && (
//                 <div className="uploaded-image-container">
//                     <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
//                     <button onClick={handleWhatsAppShare}>Share to Seller on WhatsApp</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default QRCodeComponent;
 


