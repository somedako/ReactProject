import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import IntroFooter from "./IntroFooter/IntroFooter";
import Search from "./Search/Search";
import Features from "./Features/Features";
import Plan from "./Plan/Plan";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import "./App.css";

const IFitems = [
  {
    icon: "../img/Shield.svg",
    title: "99,9% UPTIME GUARANTEE",
    desc: "Disk space in all packages has been increased by ten times!",
  },
  {
    icon: "../img/Gear.svg",
    title: "MANAGED SERVICES",
    desc: "Leave the set up, management and monitoring to us.",
  },
  {
    icon: "../img/cloud.svg",
    title: "CLOUD SERVICES",
    desc: "Reliable, high- performance cloud that meets your changing business demands.",
  },
];

const closeModal = (e) => {
  e.preventDefault();
  let modalClose = document.getElementById("modal");
  modalClose.style.display = "none";
};

function App() {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=2")
      .then((res) => res.json())
      .then((blogs) => setBlog(blogs))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="page">
      <Header />
      <Intro>
        <div className="modal" id="modal">
          <div className="modal__inner">
            <div className="modal__header">
              <h4 className="modal__title">Sign up</h4>
              <div className="modal__text">
                Sign up to day and also get free{" "}
              </div>
            </div>
            <form className="form" action="/" method="post">
              <div className="form__group">
                <input
                  className="input  input--dark  input--user"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="form__group">
                <input
                  className="input  input--dark  input--phone"
                  type="tel"
                  placeholder="Your phone"
                />
              </div>
              <div className="form__group">
                <input
                  className="input  input--dark  input--email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <button className="btn  btn--red btn--form" type="submit">
                <span>SIGN UP</span>
              </button>

              <button className="modal__close" type="button">
                <img src="../img/close.svg" alt="Close" onClick={closeModal} />
              </button>
            </form>
          </div>
        </div>
      </Intro>
      <IntroFooter items={IFitems} />
      <Search />
      <Features />
      <Plan />
      <Testimonials />
      <Blog blogs={blogs} />
      <Footer />
    </div>
  );
}

export default App;
