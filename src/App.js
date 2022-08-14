import './App.css';
import Home from './components/Home';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState('home');

  return (
    <div className="App">
      <nav>
        <img className='logo' src='https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/quiz-icon.png' alt='logo'/>
        <button onClick={() => setNav('home')}>Home</button>
        <button onClick={() => setNav('list')}>List</button>
      </nav>
      <section>
        {nav === 'home' && <Home />}
        {nav === 'list' && <List />}
      </section>
    </div>
  );
}

export default App;