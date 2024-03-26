//import logo from './logo.svg';
import './App.css';

const now = new Date();
let muscle;
const currTime = now.toLocaleDateString();
if (currTime[0] % 2 == 0) {
  muscle = 'Chest & Back'
} else {
  muscle = 'Leg'
}

function TodaysLift() {

  return (
      <>
        <h2>{muscle} Day : {currTime}</h2>
      </>

  );
}

function StartButton() {
  return (
      <button>Start Workout</button>
  );
}

function Exercises() {
  const exercises = [
    {'name' : 'Bench Press','weight' : '225 lbs', 'sets' : '3', 'reps' : '8', 'group': 'Chest & Back'},
    {'name' : 'Barbell Squat','weight' : '405 lbs', 'sets' : '3', 'reps' : '5', 'group': 'Leg'},
    {'name' : 'Barbell Bent Over Row','weight' : '135 lbs', 'sets' : '4', 'reps' : '10', 'group': 'Chest & Back'},
    {'name' : 'Leg Extension','weight' : '100 lbs', 'sets' : '4', 'reps' : '15', 'group': 'Leg'},
  ]
  let listExercises = []
  for ( let exercise of exercises) {
    if (exercise.group === muscle) {
      listExercises.push(<li>{exercise.name}: {exercise.weight} - {exercise.sets} x {exercise.reps}</li>);
    }
  }
  return (
      <ul>{listExercises}</ul>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodaysLift/>
        <Exercises/>
        <StartButton/>
      </header>
    </div>
  );
}

export default App;
