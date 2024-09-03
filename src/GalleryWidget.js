import React, { useState } from 'react';
import './GalleryWidget.css';

const GalleryWidget = () => {
  // Array of images
  const images = [
    "building.jpeg",
    "building.jpeg",
    "building.jpeg",
    "building.jpeg",
    "building.jpeg"
  ];

  // State to track the currently visible images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle right arrow click
  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle left arrow click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-4 space-y-4 w-full max-w-lg h-60 ">
      <div className="flex justify-between items-center">
        <button className="px-6 py-3 rounded-2xl text-white bg-black">Gallery</button>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-3 rounded-2xl text-white bg-gray-700">+ Add Image</button>
          <button onClick={handlePrevious} className="p-3 rounded-full text-white bg-gray-700">{'<-'}</button>
          <button onClick={handleNext} className="p-3 rounded-full text-white bg-gray-700">{'->'}</button>
        </div>
      </div>
      <div className="flex space-x-4">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image rounded-2xl w-36"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
