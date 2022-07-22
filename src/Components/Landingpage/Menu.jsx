import {useNavigate} from "react-router-dom"
import React from "react";
import { useState } from "react";
import "./Styles/Menu.css"
 const Items=[
    {avatar:"https://cdn4.iconfinder.com/data/icons/logistics-and-shipping-5/85/cardboard_box_package_logistics_shipping-128.png",
     title:"Package"    
     },
    {avatar:"https://cdn0.iconfinder.com/data/icons/furniture-26/64/double_bed-128.png",
     title:"Furniture"    
     },
    {avatar:"https://cdn2.iconfinder.com/data/icons/kitchen-appliances-computers-and-electronics/32/Appliances-16-128.png",
     title:"Appliances"    
     },
    {avatar:"https://cdn0.iconfinder.com/data/icons/apple-iphone-x-1/128/iphone-iphone_x-_iphonex-mobile-apple-device-2-128.png",
     title:"Electronics"    
     },
    {avatar:"https://cdn2.iconfinder.com/data/icons/fitness-61/100/gym-09-128.png",
     title:"Fitness"    
     },
    {avatar:"https://cdn4.iconfinder.com/data/icons/baby-online-shop-elasto-font-next-2020/16/21_baby-table-chair-128.png",
     title:"WFH Essentials"    
     }
 ]
function Menu(){
    const [data] = useState(Items)
    const navigate = useNavigate()
    const handleNavigate =()=>{
        navigate("/products")
    }
    return(
        <div class="menu" style={{width:"85%"}} >
             {
                data.map((el)=>(
                    <div onClick={handleNavigate} >
                        <img src={el.avatar} alt={el.title} />
                        <p>{el.title}</p>
                    </div>
                ))
             }
        </div>
    )
}
export default Menu