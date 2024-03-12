import React from "react";
import { Button } from "flowbite-react";

export default function ButtonDemo({ text }) {
  return (
    <Button gradientDuoTone="purpleToPink" type="submit">
      {text}
    </Button>
  );
}
