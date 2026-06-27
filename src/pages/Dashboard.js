import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [resumes, setResumes] =
    useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const fetchResumes = async () => {
    try {
      const res =
        await API.get("/resumes");

      setResumes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteResume = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this resume?"
      );

    if (!confirmDelete) return;

    try {
      await API.delete(
        `/resumes/${id}`
      );

      fetchResumes();
    } catch (err) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <span className="dashboard-kicker">
            Workspace
          </span>

          <h1>
            Welcome, {user?.name}
          </h1>

          <p>
            Your saved resumes
          </p>
        </div>

        <button
          onClick={() =>
            navigate(
              "/create-resume"
            )
          }
        >
          Create New Resume
        </button>

      </div>

      <div className="resume-grid">

        {resumes.length === 0 ? (

          <div className="empty-state">

            <h2>
              No Resumes Yet
            </h2>

            <p>
              Create your first
              professional resume now.
            </p>

            <button
              onClick={() =>
                navigate(
                  "/create-resume"
                )
              }
            >
              Create Resume
            </button>

          </div>

        ) : (

          resumes.map((resume) => (
            <div
              className="resume-card"
              key={resume.id}
            >

              <h3>
                {resume.full_name}
              </h3>

              <p>
                {resume.email}
              </p>

              <p>
                Template:
                {" "}
                {resume.template}
              </p>

              <div className="resume-actions">

                <button
                  onClick={() =>
                    navigate(
                      `/create-resume/${resume.id}`
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteResume(
                      resume.id
                    )
                  }
                >
                  Delete
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Open resume and click Download PDF"
                    )
                  }
                >
                  Download
                </button>

              </div>

            </div>
          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;
