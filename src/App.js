import './App.css';
import Home from './components/Home';
import List from './components/List';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState('home');

  return (
    <div className="App">
      <nav>
        <img className='logo' src='https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/quiz-icon.png' alt='logo' onClick={() => setNav('home')}/>
        <button className='navbtn' onClick={() => setNav('home')}>Home</button>
        <button className='navbtn' onClick={() => setNav('list')}>List</button>
        <button className='navbtn' onClick={() => setNav('login')}>Login</button>
        <button className='navbtn' onClick={() => setNav('register')}>Register</button>
        <button className='navbtn' onClick={() => setNav('create')}>Create</button>

      </nav>
      <section className='app-section'>
        {nav === 'home' && <Home />}
        {nav === 'list' && <List />}
        {nav === 'login' && <Login />}
        {nav === 'register' && <Register />}
        {nav === 'create' && <Create />}
      </section>
    </div>
  );
}

export default App;