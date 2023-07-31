
import './App.css';
import HeroDetail from './components/HeroDetail'
import batman from './images/batman.jpeg';

function App() {
  return (
    <div>
      <img src={batman} alt="Batman" height="250px"/>
      <p id="blue-alias">Alias: Batman</p>
      <p class="green-class">Name: Bruce Wayne</p>
      <button class="green-class">Like</button>
    </div>
    );
}

export default App;
