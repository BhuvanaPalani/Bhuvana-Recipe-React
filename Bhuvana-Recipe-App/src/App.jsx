import HomePage from "./components/HomePage";
import DishList from "./components/DishList";
import RegisterPage from "./components/RegisterPage";
import "./app.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
         <Link to="/">Home</Link>
         <Link to="/dishlist">Dish List</Link>
         <Link to="/register">Register</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dishlist" element={<DishList />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
