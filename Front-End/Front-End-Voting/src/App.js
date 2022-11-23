import './App.css';
import NavBar from './components/NavBar';
import Vote from './components/Vote';
import Conclude from './components/Conclude';
import CreateElection from './components/CreateElection';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateElection />}/>
          <Route path="/vote" element={<Vote />}/>
          <Route path="/conclude" element={<Conclude />}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
