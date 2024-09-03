import React from 'react';
import AboutMeWidget from './AboutMeWidget';
import GalleryWidget from './GalleryWidget';

function App() {
  return (
    <div className="flex h-screen p-20  custom-gap"> {/* Use custom class */}
      {/* Left Widget */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <div className="bg-gray-700 w-11/12 h-full max-h-[500px] rounded-2xl shadow-lg">
          {/* This div is intentionally left empty as per your requirement */}
        </div>
      </div>

      {/* Right Container for All Widgets */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-6">
        <AboutMeWidget className="w-full max-w-lg h-[240px]" />
        <GalleryWidget className="w-full max-w-lg h-[240px]" />
      </div>
    </div>
  );
}

export default App;
