import { StrictMode } from 'react';
import './App.css';
import UseStateArray from './components/Mid_reducer';

function App() {
  return (
    <StrictMode>
      <div className="App">
        <header className="App-header">
          <UseStateArray/>
        </header>
      </div>
    </StrictMode>
  );
}

export default App;