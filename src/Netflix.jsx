import React from "react";
import "./Netflix.css";
function NetflixClone() {
  return (
    <div className="netflix-container">
      {/* Header Section */}
      <div className="page1">
      <header className="header">
        <div className="logo-container">
          <img src="logo.png" alt="Netflix Logo" className="logo" />
        </div>
        <div className="nav-options">
          <select className="language-selector">
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Unlimited movies, TV shows, and more.</h1>
        <p className="hero-subtitle">Watch anywhere. Cancel anytime.</p>
        <p className="hero-subtitle">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="email-signup">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="start-btn">Get Started</button>
        </div>
      </section>
      </div>
      {/* Features Sections */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>Enjoy on your TV</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="feature-image">
          <img src="tv.png" alt="TV" className="img1"/>
        </div>
      </section>

      <section className="feature-section reverse">
        <div className="feature-image">
          <img src="mobile.jpg" alt="Mobile" className="img2"/>
        </div>
        <div className="feature-content">
          <h2>Download your shows to watch offline</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-content">
          <h2>Watch everywhere</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="feature-image">
          <img src="tvmob.jpg" alt="Devices" />
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div className="question">What is Netflix? <span>+</span></div>
          <div className="question">How much does Netflix cost? <span>+</span></div>
          <div className="question">Where can I watch? <span>+</span></div>
          <div className="question">How do I cancel? <span>+</span></div>
          <div className="question">What can I watch on Netflix? <span>+</span></div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Questions? Call 000-800-919-1694</p>
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
          <a href="#">Help Centre</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="footer-language">
          <select className="language-selector">
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
        <p>Netflix India</p>
      </footer>
    </div>
  );
}

export default NetflixClone;
