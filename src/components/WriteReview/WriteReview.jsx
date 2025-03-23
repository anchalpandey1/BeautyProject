import React, { useState } from 'react';
import { AiOutlinePaperClip, AiOutlineCloseCircle } from 'react-icons/ai';

import { GoStarFill } from 'react-icons/go';


const WriteReview = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating((prevRating) => (prevRating === starIndex + 1 ? 0 : starIndex + 1));
  };

  const [reviewText, setReviewText] = useState('');
  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files);

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        file.preview = reader.result;
        setUploadedFiles((prevFiles) => [...prevFiles, file]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  return (
    <div>
      {/* 1st div container */}
      <div className="shadow-lg p-4 bg-white mx-auto w-[90%] rounded-md mt-5 font-SulphurPoint md:hidden">
        <h1 className="text-[#504949] text-2xl xl:text-4xl">Rating</h1>
        <div className="flex space-x-4 items-center mt-4">
          {[...Array(5).keys()].map((index) => (
            <GoStarFill
              key={index}
              className={`text-3xl xl:text-4xl   ${
                index < rating ? 'text-[#F6BB35]' : 'text-[#989898]'
              } cursor-pointer`}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
      </div>

      {/* 2nd div container */}
      <div className="shadow-lg p-4 bg-white mx-auto w-[90%] rounded-md mt-5 font-SulphurPoint md:hidden">
        <h1 className="text-[#504949] text-2xl xl:text-4xl">Review</h1>
        <div className="mt-4">
          <textarea
            id="reviewText"
            className="border border-[#989898] rounded-md p-2 w-full focus:outline-none bg-gray-100"
            rows="4"
            placeholder="Write review."
            value={reviewText}
            onChange={handleReviewTextChange}
          ></textarea>
        </div>

        {/* Image Upload Section */}
        <div className="mt-4">
      <h1 className="text-[#504949] text-2xl xl:text-4xl">Upload Image</h1>
      
      <div className="mt-4 border border-[#989898] rounded-md p-6 w-full focus:outline-none relative bg-gray-100">
  {/* File input hidden by default */}
        <input
          type="file"
          id="fileInput"         
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
          multiple
        />

        {/* Placeholder text for "Choose File" */}
        {uploadedFiles.length === 0 && (
        <span className="text-[#989898]">Choose File</span>
        )}

        {/* Button to trigger file input */}
        <label htmlFor="fileInput" className="absolute top-0 right-0 cursor-pointer p-1 py-5">
          <AiOutlinePaperClip className="w-6 h-6 text-[#A21D3C]" />
        </label>

        {/* Display uploaded images */}
        {uploadedFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between mt-2">
            <img src={file.preview} alt={`Preview ${index}`} className="w-16 h-16 object-cover rounded-md mr-2" />
            <AiOutlineCloseCircle className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => handleRemoveFile(index)} />
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default WriteReview;
