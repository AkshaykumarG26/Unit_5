import logo from './logo.svg';
import './App.css';

function App() {
  const operatingSystem = ["Android", "Blackberry", "iphone", "Windows Phone"]
  const manufacturer = ["Apple", "Samsung", "Google", "HTC"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
          {operatingSystem.map(e => <li>{e}</li>)}
          </ul>

      <h1>Mobile Manufacturer</h1>
      <ul>
          {manufacturer.map(e => <li>{e}</li>)}
        </ul>

    </div>
  );
}

export default App;
