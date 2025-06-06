import logo from './images/simran_portfolio.jpg';
import CombinedWorkEx from './Modules/workex/combinedWorkEx'
import Education from './Modules/education/education'
import NavBar from './Modules/navigation_bar/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Heading">
        <h1 className="App-name">Simran Jain</h1>
        <p className="App-title">Financial Associate</p>
      </div>

      <div className="split-container">
        <div className="image-container">
          <img src={logo} className="App-logo" alt="Simran Jain" />
        </div>
        <div className="resume">
          <h2>Education</h2>
          <Education/>
          <br/>
          <h2>Work Experience</h2>
          <CombinedWorkEx></CombinedWorkEx>
        </div>
      </div>
    </div>
  );
}

export default App;
