import { Routes, Route, NavLink } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import UserAccount from '../pages/UserAccount';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <StartPage />} />
        <Route exact path="/userAccount" element={ <UserAccount /> } />    
      </Routes>
    </div>
  );
}

export default App;
