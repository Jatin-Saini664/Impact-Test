import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Candidate from './Components/Candidate';
import Shortlisted from './Components/Shortlisted';
import Rejected from './Components/Rejected';
import User from './Components/User';
import { DataProvider } from './Context/DataProvider';

function App() {
  return (
    <DataProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Candidate/>} exact></Route>
        <Route path="/:id" element={<User/>}></Route>
        <Route path="/shortlisted" element={<Shortlisted/>}></Route>
        <Route path="/rejected" element={<Rejected/>}></Route>
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
