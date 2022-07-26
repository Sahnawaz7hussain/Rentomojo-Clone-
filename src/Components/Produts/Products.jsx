import axios from "axios";
import React,{useState,useEffect} from "react"
import "./ProductStyle/Products.css"
/*
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
*/
function Products(){
     //const [data] = useState(products)
     const [loading ,setLoading] = useState(false);
     const [posts,setPosts] = useState([])
     useEffect(()=>{
       const loadProducts = async() =>{
          setLoading(true)
          
          const response = await axios.get("https://fake-json-server-api-sahnawaz.herokuapp.com/products")
          setPosts(response.data)
          setLoading(false)

       }

loadProducts()

     },[])
     console.log(posts)
    return(
        <div className="product-main-container">

        
           <h2>Products ({posts.length}+)</h2>
     {
      loading? <h3 style={{textAlign:"center"}} >Loading products...</h3>:
        <div className="products-container">
           {
            posts.map(({avatar,title,rent})=>(
                <div className="product-card">
                    <img src={avatar} alt={title} />
                    <h3>{title}</h3>
                    <hr />
                    <p>₹ {rent}/mo</p>
                </div>
            ))
          } 
        </div>
      }
        </div>
    )
}

export default Products