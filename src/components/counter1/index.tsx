import { FC, Fragment, memo } from "react";

interface Counter1Props {
  value: number;
  onClick: () => void;
}

export const Counter1: FC<Counter1Props> = memo(({ value, onClick }) => {
  console.log("Counter 1 render");

  return (
    <Fragment>
      <h1>Value: {value}</h1>
      <button type="button" onClick={onClick}>
        +
      </button>
    </Fragment>
  );
});
