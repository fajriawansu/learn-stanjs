import "./App.css";
import { useStoreEffect, reset, useStore } from "./store";

function App() {
  const { setCounter, counter, upperCaseMessage, message, setMessage } =
    useStore();

  useStoreEffect(({ counter }) => {
    console.log(counter);
  });

  return (
    <>
      <div>Test Stan Js</div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>

      <div>Message</div>
      <div>Message: {message}</div>
      <div>Upper Message: {upperCaseMessage}</div>
      <input
        placeholder="set message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => reset("counter", "message")}>Reset</button>
    </>
  );
}

export default App;
