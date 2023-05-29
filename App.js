import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Facilities from './Components/Facilities';
import DoctorRegistration from './Components/DoctorRegistration';
import Successful from './Components/Successful';
import  {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import PatientRegistration from './Components/PatientRegistration';
import SuccessfullPatient from './Components/SuccessfullPatient';
import Login from './Components/Login';
import ContactUs from './Components/ContactUs';
import ContactTransfer from './Components/ContactTransfer';
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path='/Facilities' element={<Facilities/>}></Route>
          <Route path='/DoctorRegistration' element={<DoctorRegistration/>}></Route>
          <Route path='/SuccessfullRegistration' element={<Successful/>}></Route>
          <Route path='/PatientRegistration' element={<PatientRegistration/>}></Route>
          <Route path='/SuccessfullRegistered' element={<SuccessfullPatient/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Contact' element={<ContactUs/>}></Route>
          <Route path='/ContactSoon' element={<ContactTransfer/>}></Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
