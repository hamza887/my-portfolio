
import './App.css';
import Nav from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Header/>
     <AboutMe/>

    </div>
  );
}

export default App;
