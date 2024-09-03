import React, { useState } from 'react';

const AboutMeWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="text-white">
            <p>Hello! I'm Dave, your sales rep here from Salesforce. .</p>
            <br />
            <p>
              I was born and raised in Albang in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
              Both of them are just starting school.
            </p>
          </div>
        );
      case 'experiences':
        return <div className="text-white">
          <p> hello world!</p>
          I was born and raised in Albang in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
              Both of them are just starting school.</div>;
      case 'recommended':
        return <div className="text-white">I was born and raise<b>hello world! so i am ab kooli developed   this UI </b>d in Albang in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. 
              Both of them are just starting school..</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-3 space-y-2 w-full max-w-lg h-50">
      {/* Tab Buttons */}
      <div className="flex space-x-2 bg-black p-1 rounded-3xl">
        <button
          className={`px-7 py-2 rounded-3xl text-white transition duration-600 ease-in-out transform hover:bg-gray-700 ${activeTab === 'about' ? 'bg-gray-700' : 'bg-black'}`}
          onClick={() => setActiveTab('about')}
        >
          About  Me
        </button>
        <button
          className={`px-6 py-2 rounded-3xl text-white transition duration-600 ease-in-out transform hover:bg-gray-700 ${activeTab === 'experiences' ? 'bg-gray-700' : 'bg-black'}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`px-6 py-2 rounded-3xl text-white transition duration-600 ease-in-out transform hover:bg-gray-700 ${activeTab === 'recommended' ? 'bg-gray-700' : 'bg-black'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-gray-800 rounded-md p-4 overflow-y-auto h-40">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutMeWidget;
