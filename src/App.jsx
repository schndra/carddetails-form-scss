import { useState } from "react";
import CardBack from "./images/bg-card-back.png";
import CardFront from "./images/bg-card-front.png";
import MobileBackground from "./images/bg-main-mobile.png";
import DesktopBackground from "./images/bg-main-desktop.png";

import "./App.scss";

function App() {
  return (
    <main className="header">
      <div className="card-container">
        <img src={MobileBackground} alt="mobile-bg" className="mobile-bg" />
        <img src={DesktopBackground} alt="desktop-bg" className="desktop-bg" />
        <div className="card-back">
          <img src={CardBack} alt="card-back" />
          {/* input numbers inside grey border */}
        </div>
        <div className="card-front">
          <img src={CardFront} alt="card-front" />
          {/* input numbers insider card */}
        </div>
      </div>
      <section>
        <div className="container"></div>
      </section>
    </main>
  );
}

export default App;
