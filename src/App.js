import logo from './logo.svg';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import SimpleMap from './components/SimpleMap';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SimpleMap}/>
      </Router>
    </div>
  );
}

export default App;
