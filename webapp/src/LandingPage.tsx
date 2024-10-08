import './LandingPage.css';

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="header">
        <img className="logo" src="/um-logo.jpg" alt="UM Logo" />
        <h1 className="title">Office Hour Landing Page</h1>
        <div className="auth-buttons">
          <button className="signin-btn">Sign in</button>
          <button className="register-btn">Register</button>
        </div>
      </header>

      <main>
        <section className="images-section">
          <div className="image-placeholder"></div>
          <div className="image-placeholder highlighted"></div>
        </section>

        <section className="features">
          <h2>Features</h2>
          <p>What We Offer</p>
          <div className="feature-grid">
            <div className="feature">
              <i className="info-icon"></i>
              <p>Personalized</p>
            </div>
            <div className="feature">
              <i className="info-icon"></i>
              <p>Schedule</p>
            </div>
            <div className="feature">
              <i className="info-icon"></i>
              <p>Notifications</p>
            </div>
            <div className="feature">
              <i className="info-icon"></i>
              <p>Chat</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <img className="footer-logo" src="/um-logo.jpg" alt="UM Logo" />
        <div className="social-links">
          <i className="instagram-icon"></i>
          <i className="linkedin-icon"></i>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
