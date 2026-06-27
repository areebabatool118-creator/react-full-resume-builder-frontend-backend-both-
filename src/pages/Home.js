import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">

      <section className="hero">

        <div className="hero-left">

          <span className="hero-kicker">
            3D Resume Studio
          </span>

          <h1>
            Create Professional Resume Easily
          </h1>

          <p>
            Build modern and attractive resumes
            with multiple templates.
            Fast, responsive and professional
            Resume Builder.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/templates")}
          >
            Get Started
          </button>

        </div>

        <div className="hero-right">

          <div
            className="hero-visual"
            aria-label="3D resume preview"
          >
            <div className="hero-glow-card">
              <div className="hero-card-bar" />
              <div className="hero-card-profile">
                <span />
                <div>
                  <b />
                  <i />
                </div>
              </div>
              <div className="hero-card-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-card-panels">
                <span />
                <span />
              </div>
            </div>

            <div className="hero-floating-badge badge-one">
              PDF
            </div>

            <div className="hero-floating-badge badge-two">
              CV
            </div>
          </div>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h2>Professional Templates</h2>

          <p>
            Multiple resume templates
            for every profession.
          </p>
        </div>

        <div className="feature-card">
          <h2>Easy Editing</h2>

          <p>
            Update your resume anytime
            with dynamic editing.
          </p>
        </div>

        <div className="feature-card">
          <h2>Download Resume</h2>

          <p>
            Download professional resumes instantly.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;
