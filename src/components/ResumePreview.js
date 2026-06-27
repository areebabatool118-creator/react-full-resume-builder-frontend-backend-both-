function ResumePreview({ data }) {
  if (data.template === "professional") {
    return (
      <div
        className="resume-preview professional professional-layout"
        id="resume-preview"
      >
        <aside className="resume-sidebar">
          <h1>{data.fullName}</h1>
          <p>{data.email}</p>
          <p>{data.phone}</p>

          <div className="resume-section">
            <h2>Skills</h2>
            <p>{data.skills}</p>
          </div>

          <div className="resume-section">
            <h2>Certifications</h2>
            <p>{data.certifications}</p>
          </div>
        </aside>

        <main className="resume-main">
          <div className="resume-section">
            <h2>Experience</h2>
            <p>{data.experience}</p>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <p>{data.education}</p>
          </div>

          <div className="resume-section">
            <h2>Projects</h2>
            <p>{data.projects}</p>
          </div>
        </main>
      </div>
    );
  }

  if (data.template === "minimal") {
    return (
      <div
        className="resume-preview minimal minimal-layout"
        id="resume-preview"
      >
        <header className="minimal-resume-header">
          <h1>{data.fullName}</h1>
          <p>
            {data.email} {data.phone && `| ${data.phone}`}
          </p>
        </header>

        <div className="resume-section">
          <h2>Education</h2>
          <p>{data.education}</p>
        </div>

        <div className="resume-section">
          <h2>Experience</h2>
          <p>{data.experience}</p>
        </div>

        <div className="resume-section">
          <h2>Skills</h2>
          <p>{data.skills}</p>
        </div>

        <div className="resume-section">
          <h2>Projects</h2>
          <p>{data.projects}</p>
        </div>

        <div className="resume-section">
          <h2>Certifications</h2>
          <p>{data.certifications}</p>
        </div>
      </div>
    );
  }

  if (data.template === "creative") {
    return (
      <div
        className="resume-preview creative creative-layout"
        id="resume-preview"
      >
        <header className="creative-resume-header">
          <div className="creative-avatar">
            {(data.fullName || "R").charAt(0)}
          </div>
          <div>
            <h1>{data.fullName}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </div>
        </header>

        <div className="creative-resume-grid">
          <div className="resume-section">
            <h2>Skills</h2>
            <p>{data.skills}</p>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <p>{data.education}</p>
          </div>

          <div className="resume-section wide-section">
            <h2>Experience</h2>
            <p>{data.experience}</p>
          </div>

          <div className="resume-section wide-section">
            <h2>Projects</h2>
            <p>{data.projects}</p>
          </div>

          <div className="resume-section wide-section">
            <h2>Certifications</h2>
            <p>{data.certifications}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="resume-preview modern modern-layout"
      id="resume-preview"
    >
      <header className="modern-resume-header">
        <div>
          <h1>{data.fullName}</h1>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      </header>

      <div className="resume-section">
        <h2>Profile Skills</h2>
        <p>{data.skills}</p>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>
        <p>{data.experience}</p>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <p>{data.education}</p>
      </div>

      <div className="resume-section">
        <h2>Projects</h2>
        <p>{data.projects}</p>
      </div>

      <div className="resume-section">
        <h2>Certifications</h2>
        <p>{data.certifications}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
