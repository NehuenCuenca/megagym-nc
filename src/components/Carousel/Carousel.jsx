import { useState, useRef, useEffect } from "react";
import './Carousel.css'

const Carousel = ({ images }) => {
  const pictureRef = useRef(null);

  const [currentPosition, setCurrentPosition] = useState(0)

  const handlePreviousPicture = () => { 
    if(currentPosition < 1){
      setCurrentPosition(images.length-1)
      return
    }

    setCurrentPosition(currentPosition-1)
  }

  const handleNextPicture = () => { 
    if(currentPosition >= images.length-1){
      setCurrentPosition(0)
      return
    }

    setCurrentPosition(currentPosition+1)
  }

  useEffect(() => {
    pictureRef.current.src = images[currentPosition]
  }, [currentPosition])

  return (
    <div className='carousel'>
      <button className="carousel__button carousel__button_left" onClick={handlePreviousPicture}> {'<'} </button>
      <img className="carousel__image" ref={pictureRef} src={images[currentPosition]} alt="Gente haciendo musculacion" />
      <button className="carousel__button carousel__button_right" onClick={handleNextPicture}> {'>'} </button>
    </div>
  );
};


export default Carousel;
