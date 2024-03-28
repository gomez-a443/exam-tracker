import { createContext, useState } from "react";

export const QuestionContext = createContext({
  questions: {},
  length: 0,
  getQuestions: () => {},
});

export function QuestionContextProvider(props) {
  const [questions, setQuestions] = useState([]);
  async function getQuestions(sectionId) {
    const res = await fetch(
      `https://evaluationsystem-5m8l.onrender.com/api/v1/questions/${sectionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    );
    const temp = await res.json();
    setQuestions(temp);
    console.log(questions);
  }
  const data = {
    questions: questions,
    getQuestions: getQuestions,
    length: questions.length,
  };

  return (
    <QuestionContext.Provider value={data}>
      {props.children}
    </QuestionContext.Provider>
  );
}
