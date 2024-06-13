import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
