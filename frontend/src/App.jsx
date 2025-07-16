import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubmitForm from './components/SubmitForm';
import Leaderboard from './components/Leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Router>
      <Navbar isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      <Routes>
        <Route path="/" element={<SubmitForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;