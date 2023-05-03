import React, { useState, useEffect } from "react";
import ConditionField from "./ConditionField";
import TimeInput from "./timeInput";
import { inputData, inputCondition, inputTime } from "../lib/pattern";

const Form = () => {
  const [data, setData] = useState(inputData);
  const [time, setTime] = useState(inputTime);
  const [additionalData, setAdditionalData] = useState(inputCondition);

  // Submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = additionalData;
    let x = Object.keys(obj);
    for (let i = 0; i < x.length; i++) {
      const key = x[i];
      const value = obj[key];
      if (value === "") {
        delete obj[key];
      }
    }
    console.log({ ...data, ...obj });
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: JSON.stringify({ ...data, ...obj }),
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };

  // Update values in data variable
  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    const change = Object.values(time).map((x) => (x.length < 2 ? "0" + x : x));
    setData((prev) => ({
      ...prev,
      preparation_time: Object.values(change).join(":"),
    }));
  }, [time]);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2>Dishes Form</h2>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col items-center bg-gray-200 shadow-md rounded p-5 gap-3"
      >
        {/* Name input */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <label>Name:</label>
          <input
            required
            id="name"
            onChange={(e) => onChange(e)}
            className="rounded p-1 sm:ml-10"
            placeholder="Name..."
          />
        </div>

        {/* Preperation Time input */}
        <TimeInput time={time} setTime={setTime} />

        {/* Type input */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <label>Type:</label>
          <select
            className="rounded p-1 sm:ml-10"
            required
            id="type"
            onChange={(e) => onChange(e)}
          >
            <option></option>
            <option>pizza</option>
            <option>soup</option>
            <option>sandwich</option>
          </select>
        </div>

        {/* Conditional input fields */}
        {data.type !== "" && (
          <ConditionField
            value={data.type}
            additionalData={additionalData}
            setAdditionalData={setAdditionalData}
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 p-2 mt-5 w-1/2 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
