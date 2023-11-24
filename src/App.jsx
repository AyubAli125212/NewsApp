import React from "react";
<<<<<<< HEAD
import { Navbar, Banner, Catagories, TopPosts, News } from "./components";
import { Container } from "postcss";

function App() {
  return (
    <div className="bg-gray-300">
      <Container>
        <Navbar />
        <Banner />
        <Catagories />
        <TopPosts />
        <News />
      </Container>
    </div>
  );
}
=======
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};
>>>>>>> 4a3905e (Project Folder Structure)

export default App;
