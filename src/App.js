import './App.css';
import { useState } from 'react';
import ComboBox from './components/ComboBox';
import  { Header }  from "./components/Header";
import { StationList } from './pages/StationList';
import { Footer } from './components/Footer';

function App() {
  const [locoid, setLocoid] = useState("");
  const [position, setPosition] = useState({ latitude: null, longitude: null, city:"" });
  
  return (
    <div className="App ">
      <div className='sticky top-0'>
            <Header />
            <ComboBox setLocoid={setLocoid}  position={position} setPosition={setPosition}/>
      </div>
    <StationList locoid={locoid} position={position}/>
    <Footer/>
    </div>
  );
}

export default App;
