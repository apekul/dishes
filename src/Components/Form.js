import React, { useState } from "react";

const Form = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   preparation_time: "01:30:22",
  //   type: "pizza",
  //   diameter: 0,
  //   no_of_slices: 4,
  // });

  // const onChange = (e) => {
  //   setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2>Dishes Form</h2>
      <form className="flex flex-col items-center bg-gray-200 shadow-md rounded p-5 gap-3">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <label>Name:</label>
          <input
            // onChange={(e) => onChange(e)}
            className="rounded p-2 sm:ml-10"
            id="name"
            placeholder="Name..."
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <label>Preperation Time:</label>
          <input
            type="time"
            step="1"
            className="rounded p-2 sm:ml-10"
            placeholder="01:30:22"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <label>Type:</label>
          <select className="rounded p-2 sm:ml-10">
            <option></option>
            <option>pizza</option>
            <option>soup</option>
            <option>sandwich</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 p-2 mt-5 w-1/2 rounded text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
