import React from "react";

export default function ModernTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="p-8 bg-gray-100 rounded shadow-md" id="resume-preview">
      <header className="mb-6 border-b pb-2">
        <h1 className="text-3xl font-bold text-blue-700">{data.name}</h1>
        <p className="text-sm text-gray-600">{data.email}</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
        <p className="text-gray-800 leading-relaxed">{data.experience}</p>
      </section>
    </div>
  );
}
