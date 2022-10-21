import { useState } from "react";
import logo from "/src/images/logo.svg";
import iconArrow from "/src/images/icon-arrow.svg";
import iconError from "/src/images/icon-error.svg";
import heroMobile from "/src/images/hero-mobile.jpg";
import heroDesktop from "/src/images/hero-desktop.jpg";
import bgPattern from "/src/images/bg-pattern-desktop.svg";

function App() {
  var [error, setError] = useState(false);
  var [input, setInput] = useState("");

  function isValidEmail(email) {
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  function handleSubmit(event) {
    if (isValidEmail(input)) {
      setError(false);
      window.alert(`You have subscribed succesfully with the email: ${input}`);
    } else {
      setError(true);
    }
    event.preventDefault();
  }

  return (
    <div className="wrapper">
      <header className="header max-width">
        <img alt="logo" className="header__logo" src={logo} />
      </header>

      <main className="main">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <img
            alt="young lady with an orange shirt"
            className="main__img"
            src={heroMobile}
          />
        </picture>
        <div className="main__container max-width">
          <h1 className="main__title">
            We're <b className="main__title--bold">coming soon</b>
          </h1>
          <p className="main__text">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form
            className={`main__form ${error ? "main__form--error" : ""}`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="main__input"
              placeholder="Email Address"
            />
            <button aria-label="submit email" className="main__btn">
              <img alt="arrow icon" className="main__btn-img" src={iconArrow} />
            </button>
          </form>
        </div>
        <img className="main__bg-pattern" src={bgPattern} />
      </main>
    </div>
  );
}

export default App;
