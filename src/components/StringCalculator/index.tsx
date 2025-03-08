//* Packages Import
import React, { useState } from "react";

//* Utils Import
import { add } from "../../utils";

export const StringCalculator: React.FC = () => {
  //* State to store the input string
  const [input, setInput] = useState<string>("1,2,3");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>("");

  //* Function to handle the calculation
  const handleCalculate = () => {
    try {
      setError("");
      setResult(add(input));
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-2">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Calculate
      </button>
      {error ? (
        <p className="text-red-500 mt-2">{error}</p>
      ) : (
        <p className="text-green-500 mt-2">Result: {result}</p>
      )}
    </div>
  );
};

export default StringCalculator;
