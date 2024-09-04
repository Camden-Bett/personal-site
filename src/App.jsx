import { useState } from 'react'
import profilePicture from './assets/profile-photo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={profilePicture} className="logo" alt="Mr. Swag Money Himself" />
      </div>
      <h1>Welcome to camdenbettencourt.com- <i>now with React!</i></h1>
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
              Resume page
            </li>
            <li>
              Projects page
            </li>
            <li>
              Digibug page
            </li>
            <li>
              Socials page
            </li>
            <li>
              About page
            </li>
            <li>
              Blog?
            </li>
          </ul>
          Hand-coded with care by Camden Bettencourt.
        </p>
      </div>
    </>
  )
}

export default App
