import React from 'react';
import leftImage from './assets/photo_800_540.jpg'; 
import rightImage from './assets/photo_2000_1125.jpg'; 
import './App.css';
import { ImagesCompare } from './components/ImagesCompare'; 

function App() {
  const information = {
    leftImage: leftImage,
    rightImage: rightImage,
    leftImageLabel: '800x540',
    rightImageLabel: '2000x1125'
  }

  return (
    <div className="App">
      <ImagesCompare {...information}/>
    </div>
  );
}

export default App;
