import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Q_Card({ num, name, id }) {
  return (
    <Card className=" m-4 hover:bg-slate-100 ">
      <div className="flex justify-between">
        <span className="font-bold">
          Section {num + 1} - {name}
        </span>
        {/* <ButtonDemo text="Start" id={id} /> */}
        <Link to={"/sections/" + id}>Start</Link>
      </div>
    </Card>
  );
}
