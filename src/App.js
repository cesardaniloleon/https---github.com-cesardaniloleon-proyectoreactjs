import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
      {/*<NavBar />*/}
      <h1 className="text-3xl font-bold underline">Hola Mundo con React!</h1>
    </div>
  );
}

export default App;
