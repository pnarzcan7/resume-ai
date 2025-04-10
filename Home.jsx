import React, { useState } from "react";
import InputForm from "../components/InputForm";
import ModernTemplate from "../templates/ModernTemplate";
import DownloadButton from "../components/DownloadButton";

export default function Home() {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (formData) => {
    setResumeData(formData);
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Resume AI</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {resumeData && (
        <>
          <ModernTemplate data={resumeData} />
          <DownloadButton elementId="resume-preview" />
        </>
      )}
    </div>
  );
}
