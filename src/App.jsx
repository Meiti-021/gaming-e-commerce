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
import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Page from "./pages/Page";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import WishList from "./pages/WishList";
import "./assets/fonts/Outfit.ttf";
import FontFaceObserver from "fontfaceobserver";
import Loading from "./assets/images/loading.gif";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const font = new FontFaceObserver("Outfit");

    font
      .load()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Font loading error:", error);
      });
  }, []);

  if (loading)
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <img src={loading} alt="" className="block h-48 object-contain" />
      </div>
    );

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collections"
            element={<Navigate to={"/collections/all"} />}
          />
          <Route path="/collections/:type" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pages/:id" element={<Page />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/product/:id" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
