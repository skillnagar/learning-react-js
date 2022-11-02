import { Link } from 'react-router-dom';
import './App.css';

function Navigation() {

  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )

}

export function History() {

  return (

    <div>
      <h1>Our History</h1>
    </div>

  )

}

export function Home() {

  return (
    <div>
      <h1>My Website</h1>
      <Navigation />
    </div>
  );

}

export function About() {

  return (
    <div>
      <h1>About Us</h1>
      <Navigation />
    </div>
  );

}

export function Contact() {

  return (
    <div>
      <h1>Contact Us</h1>
      <Navigation />
    </div>
  );

}

export function App() {

  return (
    <>
      <Home />
      <Navigation />
    </>

  );

}

export default App;
