import profilePhoto from './assets/profile-photo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePhoto} alt="The King of Swag" height={200}/>
        <p>
          Welcome to camdenbettencourt.com- <em>now with React!</em> Planned pages include:
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
      </header>
    </div>
  );
}

export default App;
