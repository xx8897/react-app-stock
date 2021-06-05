import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
// GA
ReactGA.initialize('G-CB7FTQF6J9');
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}


export default App;
