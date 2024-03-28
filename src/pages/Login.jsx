import { TextInput } from "flowbite-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SectionContext } from "../store/section_context";
import Button from "../components/Button";
import ButtonDemo from "../components/Button";
import { UserContext } from "../store/user_context";

export default function Login() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();

    const login = {
      name: e.target.name.value,
      email: e.target.email.value,
      stream: e.target.stream.value,
    };
    navigate("/sections");
    context.sendUserInfo(login);
    sessionStorage.setItem("Login", JSON.stringify(login));
  }

  return (
    <div className=" min-h-screen m-20">
      <div className=" flex flex-col items-center">
        <form className="flex flex-col gap-4 max-w-max" onSubmit={handleSubmit}>
          <div className="">
            <TextInput
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
            />
          </div>
          <div>
            <TextInput
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
            />
          </div>
          <div className="">
            <TextInput
              type="text"
              placeholder="Your stream"
              id="stream"
              name="stream"
            />
          </div>

          {/* <Button gradientDuoTone="purpleToPink" type="submit">
            Login
          </Button> */}
          <ButtonDemo text="Login" />
        </form>
      </div>
    </div>
  );
}
