import './App.scss';
import Settings from './Components/SettingBtn';
import AppContent from './Components/AppContent';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header"><div className="logo"></div> <h1 className="title">Snood 21</h1> 
        <Settings/>
        </header>
        <AppContent />
        <footer className="footer">
          <h2>2021</h2>
          <a href="https://github.com/fedorovichpavel">by Pavel Fedorovich</a>
          <img src="./rs.svg"></img>
        </footer>
      </div>
    </div>
  );
}

export default App;
