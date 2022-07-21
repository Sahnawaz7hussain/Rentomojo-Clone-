import React from "react";
import { useState } from "react";
import "./Styles/Secondmenu.css"
 const details= [
    {icon:"https://cdn1.iconfinder.com/data/icons/travel-tourism-part-1/64/bedroom-128.png",
      title:"Finest-quality products",
       desc:"Quality matters to you, and us! That's why we do a strict quality-check for every product."},
    {icon:"https://cdn3.iconfinder.com/data/icons/unigrid-phantom-maps-travel-vol-1/60/007_008_map_pin_locate_location_marker_gps_coordinate-128.png",
      title:"Free relocation",
       desc:"Changing your house or even your city? We'll relocate your rented products for free."},
    {icon:"https://cdn0.iconfinder.com/data/icons/professional-seo-aquas/64/Professional_SEO-16-128.png",
      title:"Free maintenance",
       desc:"Keeping your rented products in a spick and span condition is on us, so you can sit back and relax."},
    {icon:"https://cdn0.iconfinder.com/data/icons/miscellaneous-68-color-shadow/128/wrong_delete_close_sign_cancel_reject_remove_-128.png",
      title:"Cancel anytime",
       desc:"Pay only for the time you use the product and close your subscription without any hassle."},
    {icon:"https://cdn2.iconfinder.com/data/icons/summer-178/128/_Apartmnet_bed_hostel_hotel_summer_travel_trip-128.png",
      title:"Easy return on delivery",
       desc:"If you don't like the product on delivery, you can return it right away—no questions asked."},
    {icon:"https://cdn4.iconfinder.com/data/icons/miscellaneous-365-color-shadow/128/upgrading_update_progress_system_software_coding-process_mobile_new_latest_up-to-date_trendy-128.png",
      title:"Keep upgrading",
       desc:"Bored of the same product? Upgrade to try another, newer design and enjoy the change!"}
 ]

function SecondMenu(){
    const [data] = useState(details)
    return(
        <div className="second-menu">
             {
                data.map(({icon,title,desc})=>(
                    <div>
                        <img src={icon} alt="" />
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ))
             }
        </div>
    )
}

export default SecondMenu