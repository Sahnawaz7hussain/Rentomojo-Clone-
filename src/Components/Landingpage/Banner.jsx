import React from "react";
import Carousel from 'react-bootstrap/Carousel';
 import "./Styles/Banner.css"
export default function Banner(){
    const  avatars=[
        "https://s.rmjo.in/Paytm%20CB%20Web%20Banner%20Desktop%20(1).png",
        "https://s.rmjo.in/WP-Web.png",
        "https://s.rmjo.in/PS-HP-Web.png",
        "https://s.rmjo.in/AC%20Offer%20Banner%20HP_.jpg"
      ]

   return(
    <div className="banner-cont">
    <Carousel>
    <Carousel.Item interval={3000}>
      <img 
        className="d-block w-100"
        src={avatars[0]}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img 
        className="d-block w-100"
        src={avatars[1]}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={3000} >
      <img 
        className="d-block w-100"
        src={ avatars[2]}
        alt="Third slide"
      />
    </Carousel.Item>

    <Carousel.Item interval={3000} >
      <img 
        className="d-block w-100"
        src={ avatars[3]}
        alt="Fourth slide"
        />
        </Carousel.Item>

  </Carousel>
    <div id="banner-bottom">
        <p>
  Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19.
   Know more 
    </p>
    </div>
  </div>
   )
}
