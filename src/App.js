import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav';
import Contenu from './components/Contenu';
import Comm from './components/Comm';
import Sugg from './components/Sugg';

function App() {
  return (
    <div className="App">
      <Topnav />
      <div className="bott-bloc">
      <div className="bottom-bloc">
      <Contenu />
      <Comm />
      </div>
      <Sugg />
    </div>
    </div>
  );
}

export default App;
