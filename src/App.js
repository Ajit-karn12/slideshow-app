import React, { Fragment, useState } from 'react'
import './App.css';

const slides = [
  {
    title: "Todays Workout Plan",
    text: "We're gonna do 3 fundamentals exercises"
  },
  {
    title: "First , 10 push-ups",
    text: "do 10 reps, Remember about full range of motion. don't rush"
  },
  {
    title: "Great job!",
    text: "slightly bend knees,Remember about full range of motion"
  },
  {
    title: "finally, 15 sit-ups",
    text: "have a nice day and see you soon!"
  }
];

const defaultSlide = 0;

function App() {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);


  const updateSlide = (nextSlide) =>{
    nextSlide === 0 ? setFirstSlide(true) : setFirstSlide(false);
    nextSlide === slides.length - 1 ? setLastSlide(true) : setLastSlide(false);
    setCurrentSlide(nextSlide);
  }

  return (
    <Fragment>
      <header className='header-section'>
        <h3 style={{textAlign:'center', padding:'10px'}}><span style={{color:'#ffffff'}}>H</span><span>I</span> SlideShow App</h3>
      </header>
  <div className='button-container'>
    <div className='button-section'>
      <button className='button-style' 
        onClick={() => updateSlide(defaultSlide)}
        disabled={currentSlide === defaultSlide}>
        Restart
      </button>
      <button className='button-style' 
         onClick={() => updateSlide(currentSlide - 1)}
         disabled={firstSlide} >
          Prev
      </button>
      <button className='button-style' 
        onClick={() => updateSlide(currentSlide + 1)}
        disabled={lastSlide}>
        Next
      </button>
    </div>
    <div className='slide-container'>
          <h1>{slides[currentSlide].title}</h1> 
          <p style={{fontSize:'22px'}}>{slides[currentSlide].text}</p>
      </div>
</div>
     
    </Fragment>
  
  );
}

export default App;
