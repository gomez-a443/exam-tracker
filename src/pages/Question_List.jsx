import React, { useContext, useEffect } from "react";
import Q_Card from "../components/Q_Card";
import { SectionContext } from "../store/section_context";

export default function Question_List() {
  const context = useContext(SectionContext);
  console.log(context.questions);
  return (
    <>
      <div className="flex flex-col border m-20 min-h-44 ">
        {context.questions.map((section, key) => {
          return <Q_Card key={key} id={section.id} name={section.name} />;
        })}
      </div>
    </>
  );
}
