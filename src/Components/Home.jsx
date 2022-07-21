import Banner from "./Landingpage/Banner"
import Menu from "./Landingpage/Menu"
import Navbar from "./Landingpage/Navbar"
import ProductsOverview from "./Landingpage/ProductsOverview"
import Secondmenu from "./Landingpage/Secondmenu"

export default function Home(){

    return(
        <div>
        <Navbar />
        <Banner />
        <Menu />
        <ProductsOverview />
        <Secondmenu />
      
        </div>
    )
}