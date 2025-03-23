import React, { useState } from 'react';

function DeliveryBy() {
  const [pincode, setPincode] = useState('');

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleCheckPincode = () => {
    // Handle pincode check logic here
    console.log('Checking pincode:', pincode);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Delivery by</h3>
      <div className="border border-gray-300 rounded-md p-4">
        <div className="flex items-center relative">
          <input
            type="text"
            value={pincode}
            onChange={handlePincodeChange}
            placeholder="Enter pin code"
            className="  rounded-md px-4 py-2 focus:outline-none  "
          />
          <button
            onClick={handleCheckPincode}
            className="absolute right-0 top-0 bottom-0  text-[#A21D3C] px-4 py-2 rounded-md font-bold"
          >
            Check pin Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryBy;
