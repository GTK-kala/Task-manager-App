import { useNavigate} from "react-router-dom";
import { Images } from "../../assets/data";
import "./LandingPage.css";

const LandingPage = () => {
   const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Simplify Your <span>Workflow</span> <br /> with Task Manager
          </h1>
          <p className="hero-subtitle">
            Manage your projects, track tasks, and stay productive — all in one elegant dashboard.
          </p>
          <div className="hero-buttons">
            <button className="btn get-started" onClick={() => navigate('/TaskPage')}>🚀 Get Started</button>
            <button className="btn login" onClick={() => navigate('/accounts')}>Login</button>
          </div>
        </div>

        <div className="hero-illustration">
          <img
            src={Images.screenshot}
            alt="Task Manager Dashboard"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>✨ Powerful Features</h2>
        <p className="features-subtext">Everything you need to manage your tasks effectively.</p>

        <div className="features-grid">
          <div className="feature glass">
            <span>🧩</span>
            <h3>Smart Dashboard</h3>
            <p>Get real-time overviews of all your projects in a clean, beautiful interface.</p>
          </div>
          <div className="feature glass">
            <span>⚡</span>
            <h3>Instant Updates</h3>
            <p>Changes sync instantly between users — no refresh required.</p>
          </div>
          <div className="feature glass">
            <span>🎯</span>
            <h3>Goal Tracking</h3>
            <p>Set goals and visualize progress with engaging task metrics.</p>
          </div>
          <div className="feature glass">
            <span>🔒</span>
            <h3>Secure & Reliable</h3>
            <p>All your data is safely stored and protected with strong encryption.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start Managing Your Tasks Today!</h2>
        <p>Join thousands of users increasing productivity with our Task Manager App.</p>
        <button className="btn big">Get Started Free →</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Task Manager App | Built with ❤️ by Khalid</p>
      </footer>
    </div>
  );
};

export default LandingPage;
