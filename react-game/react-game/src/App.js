import './App.scss';
import AppContent from './Components/AppContent';
import Rules from './Components/RulesBtn';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header"><div className="logo"></div> <h1 className="title">Snood 21</h1> 
        <div style={{display: 'flex'}}>
        <Rules />
          </div>
        </header>
        <AppContent />
        <footer className="footer">
          <h2>2021</h2>
          <a href="https://github.com/fedorovichpavel">by Pavel Fedorovich</a>
          <img src="./rs.svg" alt="rsschool"></img>
        </footer>
      </div>
    </div>
  );
}

export default App;
