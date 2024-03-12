import { Card } from "flowbite-react";
import React from "react";
import Button from "./Button";
import ButtonDemo from "./Button";

export default function Q_Card({ id, name }) {
  return (
    <Card className=" m-4 hover:bg-slate-100 ">
      <div className="flex justify-between">
        <span className="font-bold">Section - {name}</span>
        <ButtonDemo text="Start" />
      </div>
    </Card>
  );
}
