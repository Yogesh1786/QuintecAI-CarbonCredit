import React, { useState } from "react";
import FuelsComponent from "../../pages/scope-1/Fuels";
import BioEnergyComponent from "../../pages/scope-1/BioEnergy";
import RefrigerantsComponent from "../../pages/scope-1/Refrigerants";
import PassengerVehicleComponent from "../../pages/scope-1/PassengerVehicle";
import DeliveryVehicleComponent from "../../pages/scope-1/DeliveryVehicle";
import DistrictCooling from "../../pages/scope-2/DistrictCooling";
import Electricity from "../../pages/scope-2/Electricity";
import EletricityForEvs from "../../pages/scope-2/EletricityForEvs";
import HeatAndSteam from "../../pages/scope-2/HeatAndSteam";
import MaterialUse from "../../pages/scope-3/MaterialUse";
import WasteWater from "../../pages/scope-3/WasteWater";
import Water from "../../pages/Scope-3/Water";

const CalculateCarbonEmitted = () => {
  const [selectedScope, setSelectedScope] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  const handleScopeClick = (scope) => {
    setSelectedScope(scope);
    setSelectedTab(scope);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full px-6 sm:px-8 py-8">
      {/* Title */}
      <h1 className="text-8xl font-semibold text-blue-600 mb-8">
        Carbon Footprint Calculator
      </h1>

      {/* Scope Buttons */}
      <div className="flex space-x-14 mb-8 text-2xl">
        {/* Scope 1 Button */}
        <button
          className={`px-6 py-4 font-medium ${
            selectedTab === "Scope1"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
          onClick={() => handleScopeClick("Scope1")}
        >
          Scope 1
        </button>

        {/* Scope 2 Button */}
        <button
          className={`px-6 py-4 font-medium ${
            selectedTab === "Scope2"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
          onClick={() => handleScopeClick("Scope2")}
        >
          Scope 2
        </button>

        {/* Scope 3 Button */}
        <button
          className={`px-6 py-4 font-medium ${
            selectedTab === "Scope3"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
          onClick={() => handleScopeClick("Scope3")}
        >
          Scope 3
        </button>
      </div>

      {/* Selected Scope 1 */}
      {selectedScope === "Scope1" && (
        <div className="flex justify-center space-x-14 mb-8">
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "Fuels"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("Fuels")}
          >
            Fuels
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "BioEnergy"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("BioEnergy")}
          >
            Bio Energy
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "Refrigerants"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("Refrigerants")}
          >
            Refrigerants
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "PassengerVehicle"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("PassengerVehicle")}
          >
            Passenger Vehicle
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "DeliveryVehicle"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("DeliveryVehicle")}
          >
            Delivery Vehicle
          </button>
        </div>
      )}

      {/* Selected Scope 2 */}
      {selectedScope === "Scope2" && (
        <div className="flex justify-center space-x-14 mb-8">
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "DistrictCooling"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("DistrictCooling")}
          >
            District Cooling
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "Electricity"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("Electricity")}
          >
            Electricity
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "ElectricityForEvs"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("ElectricityForEvs")}
          >
            Electricity For EVS
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "HeatAndSteam"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("HeatAndSteam")}
          >
            Heat and Steam
          </button>
        </div>
      )}

      {/* Selected Scope 3 */}
      {selectedScope === "Scope3" && (
        <div className="flex justify-center space-x-14 mb-8">
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "MaterialUse"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("MaterialUse")}
          >
            Material Use
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "WasteWater"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("WasteWater")}
          >
            Waste Water
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              selectedTab === "Water"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            } border border-blue-600 rounded-2xl btn-wide transition-all duration-300 hover:bg-blue-600 hover:text-white`}
            onClick={() => handleTabClick("Water")}
          >
            Water
          </button>
        </div>
      )}

      {/* Display content based on selected tab */}
      <div className="text-center">
        {/* SelectedTab Scope 1 */}
        {selectedTab === "Fuels" && <FuelsComponent />}
        {selectedTab === "BioEnergy" && <BioEnergyComponent />}
        {selectedTab === "Refrigerants" && <RefrigerantsComponent />}
        {selectedTab === "PassengerVehicle" && <PassengerVehicleComponent />}
        {selectedTab === "DeliveryVehicle" && <DeliveryVehicleComponent />}

        {/* SelectedTab Scope 2 */}
        {selectedTab === "DistrictCooling" && <DistrictCooling />}
        {selectedTab === "Electricity" && <Electricity />}
        {selectedTab === "ElectricityForEvs" && <EletricityForEvs />}
        {selectedTab === "HeatAndSteam" && <HeatAndSteam />}

        {/* SelectedTab Scope 3 */}
        {selectedTab === "MaterialUse" && <MaterialUse />}
        {selectedTab === "WasteWater" && <WasteWater />}
        {selectedTab === "Water" && <Water />}
      </div>
    </div>
  );
};

export default CalculateCarbonEmitted;
