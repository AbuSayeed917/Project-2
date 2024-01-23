import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const bmiValue = (weight / (height * height)) * 10000;
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height in cm"
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight in kg"
        />
        <button onClick={calculateBMI}>Calculate</button>
      </form>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;
