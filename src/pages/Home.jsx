import { useState } from 'react'
import profilePicture from '../assets/profile-photo.png'
import '../App.css'
import { useNavigate, BrowserRouter } from 'react-router-dom'

function Home() {
  var [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  return(
    <>
      <div>
        <img src={profilePicture} className="logo" alt="Mr. Swag Money Himself" />
      </div>
      <h1>Welcome to camdenbettencourt.com- <i>Home page!</i></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Planned pages include:
          <ul>
            <li>
              Homepage
            </li>
            <li>
              Resume
            </li>
            <li>
              Projects
            </li>
            <li>
              Digibug
            </li>
            <li>
              <button onClick={() => {navigate("/socials")}}>Socials</button>
            </li>
            <li>
              About
            </li>
            <li>
              Blog (maybe...)
            </li>
          </ul>
          Additional roadmap elements:
          <ul>
            <li>
              Gamify webpage (add achievements, easter eggs, simple login, etc)
            </li>
            <li>
              Add header/navbar
            </li>
            <li>
              Add theme picker
            </li>
            <li>
              Add small animations
            </li>
          </ul>
          Hand-coded by Camden Bettencourt.
        </p>
      </div>
    </>
  );
}

export default Home;
