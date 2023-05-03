import React from "react";

const TimeInput = ({ time, setTime }) => {
  // Updates time value and set limit of digits to Preperation Time input
  const timeUpdate = (e, item) => {
    let { value } = e.target;
    if (value.length > 2) return;

    setTime((prev) => ({
      ...prev,
      [item[0]]: value,
    }));
  };

  // Change default time value on focus in
  const handleFocusIn = (e, item) => {
    if (e.target.value === "00") {
      e.target.value = "";
      timeUpdate(e, item);
    }
  };

  // Change default time value on focus out
  const handleFocusOut = (e, item) => {
    if (Number(e.target.value) > 0) {
      return;
    }
    e.target.value = "00";
    timeUpdate(e, item);
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between">
      <label>Preperation Time:</label>
      <div className="w-auto flex gap-2 sm:ml-10 items-center">
        {Object.entries(time).map((item, index) => (
          <div key={index} className="flex items-center relative">
            <input
              type="number"
              required
              value={item[1]}
              min="0"
              max={index >= 1 ? "59" : ""}
              step="1"
              className="rounded p-1 w-14"
              onChange={(e) => timeUpdate(e, item)}
              onFocus={(e) => handleFocusIn(e, item)}
              onBlur={(e) => handleFocusOut(e, item)}
            />
            <span className="select-none pl-1 text-gray-400">{item[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeInput;
