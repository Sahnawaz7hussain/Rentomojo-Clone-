import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
// import Home from './Components/Home';
import Navbar from "./Components/Landingpage/Navbar";
import AllRoutes from "./Components/Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
