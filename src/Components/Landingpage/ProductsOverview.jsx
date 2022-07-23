import React, {useState,useEffect } from "react";
 import Slider from "react-slick";
 import "./Styles/ProductOverview.css"
 import {useNavigate} from "react-router-dom"
import axios from "axios";
 


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
function ProductsOverview(){
  //const [data] = useState(products)
   const [loading, setLoading] = useState(false);
   const [posts, setPosts] = useState([])
   useEffect(()=>{
  const loadPosts = async() =>{
  setLoading(true);

  const response = await axios.get("https://fake-json-server-api-sahnawaz.herokuapp.com/products");
       setPosts(response.data)

       setLoading(false)
  }
  loadPosts()
   },[])


    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
          nextArrow:< SampleNextArrow />,
          prevArrow:<SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const navigate = useNavigate()
      const handleNavigate =()=>{
        navigate("/products")
      }


    return(
       <div className="product-overview-container">
        <div className="upperparagraph">
            <p>You'll love to</p>
            <p>take these home</p>
        </div>
        {
          loading? <h3>Loading...</h3>: <Slider {...settings}>
         {
            posts.map((el)=>(
                <div className="items" >
                    <img src={el.avatar} alt="" />
                    <p className="title">{el.title}</p>
                    <div className="rent-box">
                        <div>
                      <p className="rent">Rent</p>

                      <p className="rent-price">₹ {el.rent}/month</p>
                        </div>
                    <button onClick={handleNavigate} >See More</button>

                    </div>
                </div>
            ))
         }
        </Slider>
        }
       </div>
    )
}

export default ProductsOverview