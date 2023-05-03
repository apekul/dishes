import React, { useEffect } from "react";
import { inputCondition } from "../lib/pattern";

const ConditionField = ({ value, additionalData, setAdditionalData }) => {
  // Update additionalData values
  const onChange = (e) => {
    const { value, id } = e.target;
    if (value.length > 2 && id !== "diameter") return;
    if (value.length > 5 && id === "diameter") return;
    setAdditionalData((prev) => ({ ...prev, [id]: parseFloat(value) }));
  };

  // Reset Values if dish type changes
  useEffect(() => {
    setAdditionalData(inputCondition);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Pizza fields */}
      {value === "pizza" && (
        <>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between ">
            <label>Number of Slices:</label>
            <input
              required
              value={additionalData.no_of_slices || ""}
              type="number"
              step="1"
              min="0"
              max="99"
              id="no_of_slices"
              onChange={(e) => onChange(e)}
              className="rounded p-1 sm:ml-10 w-12"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between ">
            <label>Diameter</label>
            <input
              required
              id="diameter"
              value={additionalData.diameter || ""}
              type="number"
              step="0.1"
              min="0"
              max="99"
              onChange={(e) => onChange(e)}
              className="rounded p-1 sm:ml-10 w-16"
            />
          </div>
        </>
      )}

      {/* Soup fields */}
      {value === "soup" && (
        <div className="w-full flex flex-col sm:flex-row items-center">
          <div className="flex w-full flex-col sm:flex-row items-center justify-between">
            <label>Spiciness scale:</label>
            <input
              required
              type="range"
              id="spiciness_scale"
              value={additionalData.spiciness_scale || ""}
              min="1"
              max="10"
              onChange={(e) => onChange(e)}
              className="rounded p-1 sm:ml-10 w-auto"
            />
          </div>
          <input
            required
            type="number"
            id="spiciness_scale"
            value={additionalData.spiciness_scale || ""}
            min="1"
            max="10"
            onChange={(e) => onChange(e)}
            className="rounded p-1 sm:ml-1 w-12"
          />
        </div>
      )}

      {/* Sandwich fields */}
      {value === "sandwich" && (
        <div className="w-full flex flex-col sm:flex-row items-center justify-between ">
          <label>Slices of bread:</label>
          <input
            required
            type="number"
            value={additionalData.slices_of_bread || ""}
            step="1"
            min="0"
            max="99"
            id="slices_of_bread"
            onChange={(e) => onChange(e)}
            className="rounded p-1 sm:ml-10 w-12"
          />
        </div>
      )}
    </>
  );
};

export default ConditionField;
