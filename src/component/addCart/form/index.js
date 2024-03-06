import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    addressPincode: '',
    houseNo: '',
    flat: '',
    buildingNo: '',
    locality: '',
    city: '',
    district: '',
    state: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform further actions with the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <>
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">Add Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col">
          <p className='font-bold mt-2 '>Contact</p>
            <input type="text" placeholder='Name' id="name" name="name" value={formData.name} onChange={handleChange}
                   className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
          </div>
          <div className="flex flex-col mt-2">
       
            <input type="text" placeholder='Mobile Number' id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange}
                   className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
          </div>
          <p className='font-bold mt-2 '>Address</p>
          <div className="flex flex-col mt-1">
           
            <input type="text" placeholder='Pincode' border-gray-300  id="addressPincode" name="addressPincode" value={formData.addressPincode} onChange={handleChange}
                   className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
          </div>
          <div className="flex flex-col mt-2">
            
            <input type="text"  border-gray-300 id="houseNo" name="houseNo" placeholder='House No./ Flat /Building no.' value={formData.houseNo} onChange={handleChange}
                   className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
          </div>
         
        <div className="flex flex-col mt-2 ">
        
            <input type="text" id="locality" placeholder='Locality/Town' name="locality" value={formData.locality} onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
          </div>
          <div className="flex mt-2 justify-between gap-1 w-[80%] ">
            <div className='mt-2 w-[40%]'>
            <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}
                   className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
            </div>
            <div className="mt-2 w-[40%]">
            <label htmlFor="state" className="text-sm font-medium text-gray-700 ">State</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange}
                   className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"/>
          </div>
           
          </div>
         
          
         
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent 
             text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 
             focus:ring-offset-2 focus:ring-yellow-500">
            Add Address
          </button>
        </div>
      </form>
    </div>
    <div>

    </div>
    </>
  );
};

export default ContactForm;
