import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'; // must be use curly braces if name export

function App() {
  return (
    <div className="App">
      <Greet/>
    </div>
  );
}

export default App;
