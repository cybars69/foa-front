import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Event from './Components/Event/Event';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Donate from './Components/Donatepage/Donate';
import TearmsAndConditions from './Components/TermsAndConditions/TearmsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Student from './Components/Sign_up/Student';
import Login from './Components/Sign_up/Login/Login';
import Student_one from './Components/Sign_up/Student_one';
import Volunteer from './Components/Sign_up/Volunteer';
import Rescue from './Components/Sign_up/Rescue';
import Shelter from './Components/Sign_up/Shelter';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/TearmsAndConditions'>
            <TearmsAndConditions />
          </Route>
          <Route path='/PrivacyPolicy'>
            <PrivacyPolicy />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Student'>
            <Student />
          </Route>
          <Route path='/Student_one'>
            <Student_one />
          </Route>
          <Route path='/Volunteer'>
            <Volunteer />
          </Route>
          <Route path='/Rescue'>
            <Rescue />
          </Route>
          <Route path='/Shelter'>
            <Shelter />
          </Route>
          <Route path='/Event'>
            <Event />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/Donate'>
            <Donate />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
