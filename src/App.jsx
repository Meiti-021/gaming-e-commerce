import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Collections from "./pages/Collections";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collections"
            element={<Navigate to={"/collections/all"} />}
          />
          <Route path="/collections/:type" element={<Collections />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
