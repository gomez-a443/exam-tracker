import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" min-h-screen m-20">
      <div className=" flex flex-col items-center">
        <form className="flex flex-col gap-4 max-w-max">
          <div className="">
            <TextInput type="text" placeholder="Your name" id="name" />
          </div>
          <div>
            <TextInput type="email" placeholder="Your email" id="email" />
          </div>
          <div className="">
            <TextInput type="text" placeholder="Your stream" id="stream" />
          </div>

          <Button gradientDuoTone="purpleToPink" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
