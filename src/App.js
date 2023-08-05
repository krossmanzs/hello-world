import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'; // must be use curly braces if name export
import { Welcome } from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      <Hello/>
    </div>
  );
}

export default App;
