import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero-text">
          <h1>Organize Your Tasks. Boost Your Productivity.</h1>
          <p>
            Track your tasks, manage projects, and stay on top of your work —
            all in one place.
          </p>
          <div className="cta-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Login</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/400x300?text=Dashboard+Preview"
            alt="App Preview"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <span>📝</span>
            <h3>Task Management</h3>
            <p>Add, update, and delete your tasks easily.</p>
          </div>
          <div className="feature-card">
            <span>📊</span>
            <h3>Dashboard Overview</h3>
            <p>See all your tasks and stats at a glance.</p>
          </div>
          <div className="feature-card">
            <span>🔔</span>
            <h3>Notifications</h3>
            <p>Never miss a deadline with timely alerts.</p>
          </div>
          <div className="feature-card">
            <span>👥</span>
            <h3>Collaboration</h3>
            <p>Assign tasks to team members (optional).</p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo">
        <h2>See it in Action</h2>
        <div className="demo-image">
          <img
            src="https://via.placeholder.com/600x350?text=Tasks+Dashboard+Demo"
            alt="Tasks Demo"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© 2025 Task Manager App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
