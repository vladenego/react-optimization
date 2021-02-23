import { FC, memo } from "react";

interface UserProps {
  user: string;
}

export const User: FC<UserProps> = memo(({ user }) => {
  console.log("User component render");

  return <h1>Hello, I'm {user}</h1>;
});
