import logo from './logo.svg';
import data from './api/nyrehabs.json'
import UserProfile from './rehabs'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <UserProfile data={data} />
    </div>
  );
}

export default App;
