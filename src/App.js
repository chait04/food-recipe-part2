import './App.css';
import RandomMeal from './components/RandomMeal'
import ReplayIcon from '@material-ui/icons/Replay';

// TODO
// 1. Search for meal 
// 2. Display Results
// 3. Random / Featured meals
// 4. BookMark favorite recipe
function refreshPage() {
  window.location.reload(false);
}

function App() {
  return (
    <div className="App">
      <div className="wrapper">

        <div className="header">
          <h1>Stay Healthy</h1>
          <input type="button" value="Get Meal" onClick={refreshPage}/>
        </div>

        <div className="container">
          <RandomMeal />
        </div>
        
      </div>
    </div>
  );
}

export default App;
