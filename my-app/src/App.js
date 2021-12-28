import React, { useEffect } from "react";
import './App.css'
import AOS from "aos";
import 'aos/dist/aos.css'
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  AOS.init()

  const authenticate = () => {
    return new Promise(resolve => setTimeout(resolve, 3000))
  }

  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 3000)
      }
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}



export default App