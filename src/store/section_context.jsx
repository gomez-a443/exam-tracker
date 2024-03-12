import { createContext, useEffect, useState } from "react";

export const SectionContext = createContext({
  questions: {},
  getQuestions: () => {},
});

export function SectionContextProvider(props) {
  const [questions, setQuestions] = useState([]);
  async function getQuestions() {
    const options = {
      method: "GET",
    };

    const res = await fetch("http://localhost:3000/sections", options);
    const temp = await res.json();
    setQuestions(temp);
    console.log(questions);
  }
  const data = {
    questions: questions,
    getQuestions: getQuestions,
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <SectionContext.Provider value={data}>
      {props.children}
    </SectionContext.Provider>
  );
}
