import React, {useEffect, useState} from 'react';
import './Carousel.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';

function Carousel() {

  const authenticatedUser = useSelector((state) => state.user.authenticatedUser);
  console.log("Authenticated", authenticatedUser);

  useEffect(() => {
    // we consume the state from redux, everytime the authenticated user state changes we run this effect
    const authenticatedUserUsername = authenticatedUser?.username;
    console.log("Authenticated user",authenticatedUserUsername);
  }, [authenticatedUser]); 
  

  const slides = [{
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Title 1',
    link: '#',
    participants: [
      {
        name: 'Actor 1',
        link: '#'
      }
    ]
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    title: 'Title 3',
    link: '#',
    participants: [
      {
        name: 'Actor 3',
        link: '#'
      }
    ]
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    title: 'Title 4',
    link: '#',
    participants: [
      {
        name: 'Actor 4',
        link: '#'
      }
    ]
  },
  {
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    title: 'Title 5',
    link: '#',
    participants: [
      {
        name: 'Actor 5',
        link: '#'
      },
      {
        name: 'Actor 6',
        link: '#'
      }
    ]
  }];

  const [current,setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () =>{
    setCurrent(current === length -1 ? 0 : current + 1 );
  }

  const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1 );
  }

  useEffect(()=>{
  }, []);

  

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (
  <div className='carousel'>
    <ArrowBackIosNewIcon className='carousel__leftArrow' onClick={prevSlide}></ArrowBackIosNewIcon>
    <ArrowForwardIosIcon className='carousel__rightArrow' onClick={nextSlide}></ArrowForwardIosIcon>
      {slides.map((slide,index)=>{
        return (
          <div className={index === current ? 'carousel__slide active' : 'carousel__slide'} key={index}>
            {index === current && <section>
            <img src={slide.image} alt={slide.title} className='carousel__image'></img>
            <div className='carousel__slideData'>
              <h2 href={slide.link} className='carousel__slideTitle'>{slide.title}</h2>
              <h4 className='carousel__slideParticipants'>{slide.participants.map((participant,pIndex)=>{
                return (
                  pIndex !== 0 ? <span href={participant.link} key={pIndex}>, {participant.name}</span> : <span href={participant.link} key={pIndex}>{participant.name}</span>
                )
              })}</h4>
            </div>
            </section>}
          </div>
        )
      })}
  </div>
    );
}

export default Carousel;
