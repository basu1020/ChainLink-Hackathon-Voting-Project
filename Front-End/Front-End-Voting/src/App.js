import './App.css';
import NavBar from './components/NavBar';
import Vote from './components/Vote';
import Conclude from './components/Conclude';
import CreateElection from './components/CreateElection';

function App() {
  return (
    <>
      <NavBar />
      <CreateElection/>
      <Vote />
      <Conclude/>
      {/* <Footer /> */}
    </>
  );
}

export default App;
