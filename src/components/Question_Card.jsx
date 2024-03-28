import { Button, Card, Label, Radio } from "flowbite-react";

import React, { useState } from "react";

export default function Question_Card({
  incrementIndex,
  decrementIndex,
  index,
  length,
  currentQuestion,
}) {
  console.log(index);
  const [grayedOutMin, setGrayedOutMin] = useState(true);
  const [grayedOutMax, setGrayedOutMax] = useState(false);

  // console.log(currentQuestion);
  function handleDecrement() {
    if (index > 0) {
      decrementIndex(index - 1);
      setGrayedOutMax(false);
    } else {
      setGrayedOutMin(true);
    }
  }
  function handleIncrement() {
    if (index < length - 1) {
      incrementIndex(index + 1);
      setGrayedOutMin(false);
    } else {
      setGrayedOutMax(true);
    }
  }

  return (
    <div className="h-dvh m-20  ">
      {currentQuestion && (
        <Card className=" ">
          <div className="mb-6">
            <h4>
              {index + 1}. {currentQuestion.question}
            </h4>
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4">Choose your favorite country</legend>
              {currentQuestion.answerOptions.map((ans) => {
                return (
                  <>
                    <div className="flex items-center gap-2">
                      <Radio id="united-state" name="countries" value="USA" />
                      <Label htmlFor="united-state">{ans.answer}</Label>
                    </div>
                  </>
                );
              })}
            </fieldset>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              className={
                grayedOutMin
                  ? "bg-gray-400"
                  : "bg-gradient-to-r from-purple-500 to-pink-500"
              }
              onClick={handleDecrement}
            >
              previous
            </Button>
            <Button
              className={
                grayedOutMax
                  ? "bg-gray-400"
                  : "bg-gradient-to-r from-purple-500 to-pink-500"
              }
              onClick={handleIncrement}
            >
              next
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
