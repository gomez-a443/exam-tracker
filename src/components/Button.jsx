import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ButtonDemo({ text, id }) {
  return (
    <Button gradientDuoTone="purpleToPink" type="submit">
      {text}
    </Button>
  );
}
