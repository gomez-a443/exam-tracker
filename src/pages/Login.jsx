import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" min-h-screen m-20">
      <div className=" flex flex-col items-center">
        <form className="flex flex-col gap-4 max-w-max">
          <div className="">
            <Label value="Your email" />
            <TextInput type="email" placeholder="name@company.com" id="email" />
          </div>
          <div className="">
            <Label value="Stream" />
            <TextInput type="text" placeholder="bca/bsc" id="stream" />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput type="password" placeholder="**********" id="password" />
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
