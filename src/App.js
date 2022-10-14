import { useState } from "react";
import logo from "/src/images/logo.svg";
import heroMobile from "/src/images/hero-mobile.jpg";

function App() {
  return (
    <div>
      <header className="header max-width">
        <img className="header__logo" src={logo} />
      </header>

      <main className="main">
        <img className="main__img" src={heroMobile} />
        <div className="main__container max-width">
          <h1 className="main__title">
            We're <b className="main__title--bold">coming soon</b>
          </h1>
          <p className="main__text">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className="main__form">
            <input
              type="text"
              className="main__form"
              placeholder="Email Address"
            />
            <button className="main__btn btn">
              <img className="main__btn-img" src="" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
