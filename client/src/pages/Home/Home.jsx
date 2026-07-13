import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <h1>
          Build Better Resumes
          <br />
          with Smart Guidance
        </h1>

        <p>
          Create professional ATS-friendly resumes with live preview,
          multiple templates, resume health check and PDF export.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="btn primary">
            Get Started
          </Link>

          <Link to="/login" className="btn secondary">
            Login
          </Link>
        </div>

      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          <h3>📄 Resume Builder</h3>
          <p>Create resumes step by step with an easy-to-use editor.</p>
        </div>

        <div className="feature-card">
          <h3>🎨 Templates</h3>
          <p>Choose from modern and professional resume templates.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Resume Health</h3>
          <p>Get suggestions to improve your resume quality.</p>
        </div>

        <div className="feature-card">
          <h3>📥 PDF Export</h3>
          <p>Download your resume instantly as a professional PDF.</p>
        </div>

      </section>

    </div>
    </>
  );
};

export default Home;