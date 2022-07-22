import React, {useState } from "react";
 import Slider from "react-slick";
 import "./Styles/ProductOverview.css"
 import {useNavigate} from "react-router-dom"
 const products=[
    {
    avatar:"https://p.rmjo.in/moodShot/kgk2znv0-1024x512.jpg",
    title:"Napster Metal Single Bed (6x3)",
    rent:309
    },
    {
    avatar:"https://p.rmjo.in/moodShot/dy0r9dem-1024x512.jpg",
    title:"Microwave Solo 20L",
    rent:369
    },
    {
    avatar:"https://p.rmjo.in/moodShot/jmu78j03-1024x512.jpg",
    title:"Rex 3-Seater Leather Sofa (Black)",
    rent:659
    },
    {
    avatar:"https://p.rmjo.in/moodShot/gwvyn0nh-1024x512.jpg",
    title:"Pixar TV Unit",
    rent:239
    },
    {
    avatar:"https://p.rmjo.in/moodShot/z3vtekv3-1024x512.jpg",
    title:"Barney Leather Recliner (Brown)",
    rent:799
    },
    {
    avatar:"https://p.rmjo.in/productSquare/53rmy7yr-500x500.jpg",
    title:"Barney Leather Recliner(Brown",
    rent:319
    },
    {
    avatar:"https://p.rmjo.in/productSquare/4o9rpi0p-500x500.jpg",
    title:"Dell XPS 13 , Intel Core i5 processor ,",
    rent:3679
    },
    {
    avatar:"https://p.rmjo.in/productSquare/eztgdt5u-500x500.jpg",
    title:"LED TV -32",
    rent:839
    },
    {
    avatar:"https://p.rmjo.in/moodShot/q5l5kxcl-1024x512.jpg",
    title:"OnePlus 7 Pro (Mirror Gray)",
    rent:1469
    },
    {
    avatar:"https://p.rmjo.in/productSquare/lbf7407m-500x500.jpg",
    title:"OnePlus (Mirror Gray)",
    rent:989
    },
    {
    avatar:"https://p.rmjo.in/moodShot/c0woz06o-1024x512.jpg",
    title:"Inverter Air Conditioner 1 Ton",
    rent:1939
    },
    {
    avatar:"https://p.rmjo.in/moodShot/dem5mxy3-1024x512.jpg",
    title:"Samsung Galaxy Note 10 (Aura Black)",
    rent:1979
    },
    {
    avatar:"https://p.rmjo.in/moodShot/jjgpd6ov-1024x512.jpg",
    title:"Redmi K20 (Carbon Black)",
    rent:649
    },
    {
    avatar:"https://p.rmjo.in/moodShot/0el20cnj-1024x512.jpg",
    title:"Redmi K20 Pro (Carbon Black)",
    rent:829
    },
    {
    avatar:"https://p.rmjo.in/moodShot/xbdyaob0-1024x512.jpg",
    title:"OnePlus 7T ( Frosted Silver )",
    rent:1159
    },
    {
    avatar:"https://p.rmjo.in/moodShot/k3bshddo-1024x512.jpg",
    title:"Apple iPhone 11 Pro (Midnight Green)",
    rent:2979
    },
    {
    avatar:"https://p.rmjo.in/moodShot/9i6k7zbf-1024x512.jpg",
    title:"Single Door Fridge (190 Litre)",
    rent:719
    },
    {
    avatar:"https://p.rmjo.in/moodShot/rzl84vq9-1024x512.jpg",
    title:"Smart LED TV - 32",
    rent:849
    },
    {
    avatar:"https://p.rmjo.in/moodShot/0ob00dpp-1024x512.jpg",
    title:"Air Conditioner 1 Ton",
    rent:1859
    },
    {
    avatar:"https://p.rmjo.in/productSquare/05gpq2h8-500x500.jpg",
    title:"Air Conditioner 1.5 Ton",
    rent:2269
    },
    {
    avatar:"https://p.rmjo.in/productSquare/05gpq2h8-500x500.jpg",
    title:"Air Conditioner 1.5 Ton",
    rent:399
    },
    {
    avatar:"https://p.rmjo.in/moodShot/ayilwp2t-1024x512.jpg",
    title:"OnePlus 7T Pro (Haze Blue)",
    rent:1639
    },
    {
    avatar:"https://p.rmjo.in/moodShot/uo1s5sxl-1024x512.jpg",
    title:"Galaxy Note 10 Plus (Aura Glow)",
    rent:2439
    },
    {
    avatar:"https://p.rmjo.in/moodShot/n5h2ybfc-1024x512.jpg",
    title:"Motorized Treadmill AF-515",
    rent:2359
    },
    {
    avatar:"https://p.rmjo.in/moodShot/8tqu4nzx-1024x512.jpg",
    title:"Apple iPhone XS (Gold)",
    rent:2919
    },
    {
    avatar:"https://p.rmjo.in/moodShot/43yr9zsp-1024x512.jpg",
    title:"Single Door Fridge (170 Litre)",
    rent:659
    }
]
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
  const [data] = useState(products)
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
        <Slider {...settings}>
         {
            data.map((el)=>(
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
       </div>
    )
}

export default ProductsOverview