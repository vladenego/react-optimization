import { useState, useMemo, useEffect, useCallback } from "react";

import { Counter1, Counter2, Text, User } from "./components";
import { styles } from "./styles";

const users = ["Nick", "John", "Alan"];

/** I add many logs to demonstrate rerenders in each component */
export const App = () => {
  const [title, setTitle] = useState("title");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    console.log("getUsers() initialization");

    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // This is good example with no extra rerenders
  const handler1 = useCallback(() => {
    setCounter1(counter1 + 1);

    console.log("counter1Handle 1");
  }, [counter1]);

  const handler2 = useCallback(() => {
    setCounter2(counter2 + 1);

    console.log("counter1Handle 2");
  }, [counter2]);

  /** Sorry for my English, Irina Vladimirovna.
   *
   * The example below is bad  because when app component rerenders,
   * our two functions initialises again, so when you try to change Counter1, Counter2 will rerender too,
   * because handler2 function gets new address, therefore Counter2 component gets new props,
   * so it is being rerendered extra time.
   * You can make sure if uncomment the code below.
   *
   * P.S. And with this two functions our Counter1 and Counter2
   * will rerender even when we change title props. This is bad :(
   */

  // const handler1 = () => {
  //   setCounter1(counter1 + 1);

  //   console.log("counter1Handle 1");
  // };

  // const handler2 = () => {
  //   setCounter2(counter2 + 1);

  //   console.log("counter1Handle 2");
  // };

  return (
    <main css={styles.main}>
      <p css={styles.title}>{title}</p>

      <input
        css={styles.input}
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Counter1 value={counter1} onClick={handler1} />

      <Counter2 value={counter2} onClick={handler2} />

      {/* Text componets will render only once
        because it is optimized with  React.memo */}
      <Text />

      {/* List of users */}
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </main>
  );
};
