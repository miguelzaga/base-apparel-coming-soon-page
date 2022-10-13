import { useState } from "react";

function App() {
  return (
    <div>
      <header className="header">
        <img className="header__logo" src="" />
      </header>

      <main className="main">
        <img className="main__img" src="" />
        <h1 className="main__title">We're coming soon</h1>
        <p className="main__text">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form className="main__form">
          <input
            type="text"
            className="main__form"
            placeholder="Email Address"
          />
          <button className="main__btn btn"></button>
        </form>
      </main>
    </div>
  );
}

export default App;
