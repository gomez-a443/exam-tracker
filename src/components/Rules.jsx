import React from "react";

export default function Rules({ length }) {
  return (
    <div className="flex flex-col gap-2">
      <span>
        1.There are total {length} sections and total duration of the test is 2
        hours.
      </span>
      <span>2.Each question carries 2 marks.There is no negative marking.</span>
      <span>
        3. Mark your answer by clicking the appropriate radio button to save
        your answer.To change your answer, please click the radio button that
        you think is appropriate.
      </span>
      <span>4.Click on the reset button to unselect answer.</span>
      <span>5.Clicking the save will take you to the next question.</span>
      <span>6.Once done click on the Finish test to end the test.</span>
      <span>7.Click on start to proceed.</span>
    </div>
  );
}
