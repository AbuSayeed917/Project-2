
import "./header.css"


const Headers = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <h1>BrunelFitness</h1>
                    </div>
                    <div className="right">
                        <ul className="right-ul">
                            <li><a href="/">Goals</a></li>
                            <li><a href="./components/DietAndWorkoutPlan">Diet and Workout</a></li>
        
                            <li><a href="/">Health Services</a></li>
                            <li><a href="/">Progress Tracker</a></li>
                            <li><a href="https://www.nhs.uk/live-well/">Resources</a></li>

                            <li><a href="./components/BMICalculator">BMI Calculation</a></li>


                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Headers