import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'; // must be use curly braces if name export
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
