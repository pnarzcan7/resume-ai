import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadButton({ elementId }) {
  const handleDownload = async () => {
    const input = document.getElementById(elementId);
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <button onClick={handleDownload} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
      Download as PDF
    </button>
  );
}
