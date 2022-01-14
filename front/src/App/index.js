import { Routes, Route, NavLink } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import Account from '../pages/Account';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <StartPage />} />
        <Route exact path="/account" element={ <Account /> } />    
      </Routes>
    </div>
  );
}

export default App;
