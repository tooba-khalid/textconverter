
import  React,{useState} from 'react';
import './App.css';
 import About from './components/About';
// import Aboutnew from './components/Aboutnew';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm'
import {
  
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
 const[mode,setMode]=useState('light')
 const[alert,setAlert]=useState(null)

 const[stntxt,setStnTxt]=useState('Enable Dark Mode')
 const showAlert=(message,type)=>{
setAlert({
 msg:message,
 type:type
})
setTimeout(() => {
 setAlert(null);
}, 3000);
 }
 const toggleStyle=()=>{
   if(mode==='light'){
   setMode('dark')
   setStnTxt('Enable light Mode')
   document.body.style.backgroundColor= '#042743'
   showAlert('Dark mode has been enabled','success');
 
 }

   else{
   setMode('light')
   setStnTxt('Enable Dark Mode');
   document.body.style.backgroundColor= 'white'
   showAlert('Light mode has been enabled','success')
 
   
}}

 return (
   
   <BrowserRouter>
 <Navbar title="Textutils" mode={mode} toggle={toggleStyle} stn={stntxt}/>
 <Alert alert={alert}/>
 <Routes>
  <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} stn={stntxt}/>}/> 

  <Route path='/about' element={<About/>}/> 
  </Routes>

 
 </BrowserRouter>
 );
}

export default App;
