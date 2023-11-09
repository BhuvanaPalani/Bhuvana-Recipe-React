import HomePage from "./components/HomePage";
import DishList from "./components/DishList";
import RegisterPage from "./components/RegisterPage";
import "./app.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// Functional component for the main App
function App() {
  // JSX for rendering the main app structure
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

// Exporting the App component as the default export
export default App;
