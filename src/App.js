import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'; // must be use curly braces if name export
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="lenoogs" hobby="game" >
        <p>This is children props</p>
      </Greet>
      <Greet name="udin" hobby="awikwok" >
        <button>Action</button>
      </Greet>
      <Greet name="ujang" hobby="kocak" />

      <Welcome name="lenoogs" hobby="game" />
      <Welcome name="udin" hobby="awikwok" />
      <Welcome name="ujang" hobby="kocak" />
      {/* <Hello /> */}
      <Message></Message>
    </div>
  );
}

export default App;
