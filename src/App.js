import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allBooks } from "./thunks/booksThunks";
import { allNews } from "./thunks/newsThunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allBooks());
    dispatch(allNews());
  }, []);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
