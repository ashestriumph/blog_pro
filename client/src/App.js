import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md pt-20 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
