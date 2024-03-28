import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { QuestionContext } from "../store/question_context";
import { Card } from "flowbite-react";
import Question_Card from "../components/Question_Card";

export default function Question_View() {
  const context = useContext(QuestionContext);

  const [index, setIndex] = useState(0);

  console.log(index);
  const { id } = useParams();

  function incrementIndex(value) {
    value < context.length && setIndex(value);
  }
  function decrementIndex(value) {
    // value > 0 && setIndex(value);
    setIndex(value);
  }
  // console.log(currentQuestion);

  useEffect(() => {
    context.getQuestions(id);
  }, []);
  return (
    <div className="w-full">
      <Question_Card
        incrementIndex={incrementIndex}
        decrementIndex={decrementIndex}
        index={index}
        length={context.length}
        currentQuestion={context.questions[index]}
      />
    </div>
  );
}
