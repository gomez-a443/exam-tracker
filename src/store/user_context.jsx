import { createContext, useState } from "react";

export const UserContext = createContext({
  user: {},
  sendUserInfo: (body) => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState();
  async function sendUserInfo(body) {
    console.log(body);
    const res = await fetch(
      "https://evaluationsystem-5m8l.onrender.com/api/v1/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const temp = await res.text();
    setUser(temp);
  }

  const userData = {
    user: user,
    sendUserInfo: sendUserInfo,
  };

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
}
