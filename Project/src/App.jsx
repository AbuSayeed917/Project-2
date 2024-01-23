import Login from "./components/Login";
import Header from "./components/Header"
import BMICalculator from "./components/BMICalculator";
import DietAndWorkoutPlan from "./components/DietAndWorkoutPlan";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Login />
      <BMICalculator/>
      <DietAndWorkoutPlan/>
    </>
  );
}


export default App;
