import "./App.css";
import { solve } from "./solution";

function App() {
  
  const smth = solve(4, 2, [{ first: 11, second: 16 }, { first: 25, second: 31 }], 2, [{ first: 14, second: 16 }, { first: 23, second: 29 }])
  console.log(smth)
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Proiect testarea sistemelor software</p>
      </header>
    </div>
  );
}

export default App;
