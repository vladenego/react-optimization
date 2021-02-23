import { FC, memo, Fragment, SetStateAction } from "react";

interface Counter2Props {
  value: number;
  onClick: () => void;
}

export const Counter2: FC<Counter2Props> = memo(({ value, onClick }) => {
  console.log("Counter 2 render");

  return (
    <Fragment>
      <h1>Value: {value}</h1>
      <button type="button" onClick={onClick}>
        +
      </button>
    </Fragment>
  );
});
