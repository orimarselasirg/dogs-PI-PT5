// import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartHomepage from './components/startHomePage/StartHomepage';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path ='/' element = {<StartHomepage/>} exact />
        <Route path ='/*' element = {<Home/>} exact />
      </Routes>
    </div>
  );
}

export default App;
