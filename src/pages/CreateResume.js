import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import API from "../services/api";
import ResumePreview from "../components/ResumePreview";

function CreateResume() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const selectedTemplate =
    searchParams.get("template");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    certifications: "",
    template: "modern",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fetchResume = async () => {
    if (!id) return;

    try {
      const res = await API.get(
        `/resumes/${id}`
      );

      setForm({
        fullName:
          res.data.full_name || "",

        email:
          res.data.email || "",

        phone:
          res.data.phone || "",

        education:
          res.data.education || "",

        skills:
          res.data.skills || "",

        experience:
          res.data.experience || "",

        projects:
          res.data.projects || "",

        certifications:
          res.data.certifications || "",

        template:
          res.data.template || "modern",
      });
    } catch (err) {
      alert("Resume not found");

      navigate("/dashboard");
    }
  };

  const saveResume = async (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.phone
    ) {
      alert(
        "Full name, email and phone are required"
      );

      return;
    }

    try {
      if (id) {
        await API.put(
          `/resumes/${id}`,
          form
        );

        alert(
          "Resume updated successfully"
        );
      } else {
        await API.post(
          "/resumes",
          form
        );

        alert(
          "Resume created successfully"
        );
      }

      navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Resume save failed"
      );
    }
  };

  const downloadPDF = async () => {
    const input =
      document.getElementById(
        "resume-preview"
      );

    const canvas =
      await html2canvas(input);

    const imgData =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const imgProps =
      pdf.getImageProperties(imgData);

    const pdfHeight =
      (imgProps.height * pdfWidth) /
      imgProps.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("resume.pdf");
  };

  useEffect(() => {
    if (selectedTemplate && !id) {
      setForm((prev) => ({
        ...prev,
        template: selectedTemplate,
      }));
    }

    fetchResume();
  }, [id, selectedTemplate]);

  return (
    <div className="resume-form-page">

      <div className="section-heading editor-heading">
        <span>Live Resume Studio</span>
        <h1>
          {id
            ? "Edit Your Resume"
            : "Create Your Resume"}
        </h1>
        <p>
          Fill the details and preview your resume
          instantly before downloading.
        </p>
      </div>

      <div className="resume-editor-grid">

      <form
        className="resume-form"
        onSubmit={saveResume}
      >
        <h2>
          {id
            ? "Edit Resume"
            : "Create Resume"}
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="education"
          placeholder="Education"
          value={form.education}
          onChange={handleChange}
        />

        <textarea
          name="skills"
          placeholder="Skills"
          value={form.skills}
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
        />

        <textarea
          name="projects"
          placeholder="Projects"
          value={form.projects}
          onChange={handleChange}
        />

        <textarea
          name="certifications"
          placeholder="Certifications"
          value={form.certifications}
          onChange={handleChange}
        />

        <select
          name="template"
          value={form.template}
          onChange={handleChange}
        >
          <option value="professional">
            Professional
          </option>

          <option value="modern">
            Modern
          </option>

          <option value="minimal">
            Minimal
          </option>

          <option value="creative">
            Creative
          </option>
        </select>

        <button type="submit">
          {id
            ? "Update Resume"
            : "Save Resume"}
        </button>

        <button
          type="button"
          onClick={downloadPDF}
          className="download-btn"
        >
          Download PDF
        </button>
      </form>

      <ResumePreview data={form} />

      </div>

    </div>
  );
}

export default CreateResume;
