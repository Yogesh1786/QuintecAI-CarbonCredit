import React from "react";

const CalculateCarbonEmitted = () => {
  return (
    <div className="w-full px-6 sm:px-8 py-8 min-h-screen bg-black overflow-hidden">
      <h1 className="text-6xl font-semibold text-blue-500 mb-8 ">
        Carbon Footprint Calculator
      </h1>

      {/* Buttons in a Single Line */}
      <div className="flex flex-wrap justify-center gap-10 p-5 text-white rounded-md mx-auto">
        {[
          "Fuel",
          "Bio Energy",
          "Refrigerants",
          "Passenger Vehicles",
          "Delivery Vehicles",
        ].map((item, index) => (
          <button
            key={index}
            className="px-16 py-3 text-lg font-semibold bg-blue-500 rounded-lg transition 
                      duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculateCarbonEmitted;
