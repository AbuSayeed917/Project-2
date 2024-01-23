import React from 'react';

const DietAndWorkoutPlan = () => {
  // Sample diet and workout plan (replace with actual data)
  const sampleDietPlan = [
    'Breakfast: Oatmeal with berries and a glass of almond milk',
    'Snack: Greek yogurt with honey and almonds',
    'Lunch: Grilled chicken salad with mixed greens and vinaigrette dressing',
    'Snack: Sliced apples with peanut butter',
    'Dinner: Baked salmon with quinoa and steamed broccoli',
  ];

  const sampleWorkoutPlan = [
    'Monday: 30 minutes of cardio (e.g., running or cycling)',
    'Tuesday: Strength training (e.g., push-ups, squats, lunges)',
    'Wednesday: 30 minutes of yoga or stretching exercises',
    'Thursday: High-intensity interval training (HIIT)',
    'Friday: Rest day',
    'Saturday: 45 minutes of swimming',
    'Sunday: Rest day',
  ];

  return (
    <div>
      <h2>Sample Diet and Workout Plan</h2>

      <h3>Diet Plan</h3>
      <ul>
        {sampleDietPlan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Workout Plan</h3>
      <ul>
        {sampleWorkoutPlan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DietAndWorkoutPlan;
