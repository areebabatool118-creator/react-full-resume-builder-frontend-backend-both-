import { useNavigate } from "react-router-dom";

function Templates() {
  const navigate = useNavigate();

  const templates = [
    {
      name: "Professional",
      value: "professional",
      desc: "Clean layout for jobs and corporate use",
      preview: "professional-preview",
    },
    {
      name: "Modern",
      value: "modern",
      desc: "Stylish resume with modern design",
      preview: "modern-preview",
    },
    {
      name: "Minimal",
      value: "minimal",
      desc: "Simple and neat resume format",
      preview: "minimal-preview",
    },
    {
      name: "Creative",
      value: "creative",
      desc: "Colorful design for creative fields",
      preview: "creative-preview",
    },
  ];

  return (
    <div className="templates-page">
      <div className="section-heading">
        <span>Template Gallery</span>
        <h1>Choose Resume Template</h1>
        <p>Select a template and create your resume.</p>
      </div>

      <div className="templates-grid">
        {templates.map((template) => (
          <div className={`template-box ${template.value}`} key={template.value}>
            <div className={`template-preview ${template.preview}`}>
              {template.value === "professional" && (
                <>
                  <div className="preview-header"></div>
                  <div className="preview-line long"></div>
                  <div className="preview-line"></div>
                  <div className="preview-columns">
                    <div>
                      <div className="preview-line short"></div>
                      <div className="preview-line"></div>
                      <div className="preview-line short"></div>
                    </div>
                    <div>
                      <div className="preview-section"></div>
                      <div className="preview-line long"></div>
                    </div>
                  </div>
                </>
              )}

              {template.value === "modern" && (
                <>
                  <div className="preview-modern-hero">
                    <span></span>
                    <div>
                      <div className="preview-line long"></div>
                      <div className="preview-line short"></div>
                    </div>
                  </div>
                  <div className="preview-pill-row">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="preview-section"></div>
                  <div className="preview-line long"></div>
                  <div className="preview-line"></div>
                </>
              )}

              {template.value === "minimal" && (
                <>
                  <div className="preview-line minimal-title"></div>
                  <div className="preview-line short"></div>
                  <div className="preview-divider"></div>
                  <div className="preview-line long"></div>
                  <div className="preview-line long"></div>
                  <div className="preview-line"></div>
                  <div className="preview-divider"></div>
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                </>
              )}

              {template.value === "creative" && (
                <>
                  <div className="preview-creative-top">
                    <span></span>
                    <div className="preview-line long"></div>
                  </div>
                  <div className="preview-creative-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="preview-line long"></div>
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                </>
              )}
            </div>

            <h3>{template.name}</h3>
            <p>{template.desc}</p>

            <button onClick={() => navigate(`/create-resume?template=${template.value}`)}>
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;
