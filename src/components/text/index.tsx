import { FC, memo } from "react";

export const Text: FC = memo(() => {
  console.log("Text component render");

  return <h1>Just text</h1>;
});
