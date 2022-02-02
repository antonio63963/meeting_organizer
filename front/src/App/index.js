import { Routes, Route, NavLink } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import Account from '../pages/Account';
import MeetingRoom from '../pages/MeetingRoom';
import './App.css';

function App() {
  return (
    <div className="App" style={{ height: '100%', minHeight: '100vh'}}>
      <Routes>
        <Route exact path="/" element={ <StartPage />} />
        <Route exact path="/account" element={ <Account /> } />  
        <Route exact path="/meetingRoom" element={ <MeetingRoom /> } />
      </Routes>
    </div>
  );
}

export default App;
