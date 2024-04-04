import { useState, useEffect } from "react";
import './Carousel.css'

const Carousel = ({ images, textTitle, textParagraph }) => {
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextPosition = (currentPosition+1 >= images.length) ? 0 : currentPosition+1
      setCurrentPosition(nextPosition)
    }, 3000);

    return () => { clearTimeout(timeout) }
  }, [currentPosition])

  return (
    <div className='carousel'>
      <img width={340} height={420} className="carousel__image" src={images[currentPosition]} alt="Gente haciendo musculacion" />
      <div className="carousel__overlay"></div>
      <div className="CTA">
        <h1 className="CTA__title">{textTitle}</h1>
        <p className="CTA__paragraph">{textParagraph}</p>
      </div>
    </div>
  );
};


export default Carousel;
