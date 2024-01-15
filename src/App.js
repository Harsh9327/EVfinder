import './App.css';
import { useState } from 'react';
import ComboBox from './components/ComboBox';
import  { Header }  from "./components/Header";
import { StationList } from './pages/StationList';
import { Footer } from './components/Footer';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [locoid, setLocoid] = useState("");
  const [position, setPosition] = useState({ latitude: null, longitude: null, city:"", lodded:false });
  const [progress, setProgress] = useState(0);
  return (
    <div className="App ">
       <LoadingBar
        color='#d1d5db'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='sticky top-0'>
            <Header />
            <ComboBox setLocoid={setLocoid}  position={position} setPosition={setPosition} progress={progress} setProgress={setProgress}/>
      </div>
    <StationList locoid={locoid} position={position}/>
    <Footer/>
    </div>
  );
}

export default App;
