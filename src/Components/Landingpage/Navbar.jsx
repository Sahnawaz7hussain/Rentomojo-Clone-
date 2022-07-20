import "./Styles/Navbar.css"

export default function Navbar(){
    return (
        <div>
        <div className="navbar_container" >
            {/* logo */}
            <div style={{display:"flex",gap:"10px"}} >
            <img src="https://www.rentomojo.com/public/images/Home/new/logo.svg" alt="" />
             <h2>rentomojo</h2>
            </div>
            <p>Find City </p>
            <div className="input-box">
            <input type="text" name="" id=""
            placeholder="Search for Products"
            />
            <img style={{width:"18px"}} src="https://www.rentomojo.com/public/images/search/newsearch.svg" alt="" />
            </div>
            <p> <span> <img style={{width:"16px"}} src="https://cdn-icons.flaticon.com/png/128/649/premium/649931.png?token=exp=1658253543~hmac=bf03a34de7c1dbac0558353f5a37108f" alt="" /> </span>Cart</p>
         
            <button className="login-signup">LOGIN/SIGNUP</button>
        </div>
        </div>
    )
}