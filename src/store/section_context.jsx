import { createContext, useEffect, useState } from "react";

export const SectionContext = createContext({
  sections: {},
  getSections: () => {},
});

export function SectionContextProvider(props) {
  const [sections, setSections] = useState([]);

  async function getSections() {
    const options = {
      method: "GET",
    };

    const res = await fetch(
      "https://evaluationsystem-5m8l.onrender.com/api/v1/sections",
      options
    );
    const temp = await res.json();
    setSections(temp);
  }

  const data = {
    sections: sections,
    getSections: getSections,
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <SectionContext.Provider value={data}>
      {props.children}
    </SectionContext.Provider>
  );
}
