import React, { useEffect, useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import RingLoader from "react-spinners/RingLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
// import Feedback from "./components/Feedback";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    AOS.init();
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="mt-[20rem] flex justify-center items-center">
          <RingLoader color={"purple"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Login />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
