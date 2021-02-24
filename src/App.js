
import './App.css';
import MoodTracker from './MoodTracker';
import Person from './Person';

function App() {
  const obj = { name: 'Jimmy'};
  return (
   <div>
      <Person info={obj} />
      <MoodTracker info={obj} />
   </div>
  );
}

export default App;
