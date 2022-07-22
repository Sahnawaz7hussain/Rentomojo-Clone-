import Banner from "./Landingpage/Banner"
import Menu from "./Landingpage/Menu"
// import Navbar from "./Landingpage/Navbar"
import ProductsOverview from "./Landingpage/ProductsOverview"
import Secondmenu from "./Landingpage/Secondmenu"
import Footer from "./Landingpage/Footer"
export default function Home(){

    return(
        <div>
     
        <Banner />
        <Menu />
        <ProductsOverview />
        <Secondmenu />
        <Footer />
      
        </div>
    )
}