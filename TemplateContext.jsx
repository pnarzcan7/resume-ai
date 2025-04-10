import React, { createContext, useState, useContext } from "react";

const TemplateContext = createContext();

export function TemplateProvider({ children }) {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  return (
    <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplate() {
  return useContext(TemplateContext);
}
