import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoute from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoute />
      </Router>
    </div>
  );
}

export default App;
