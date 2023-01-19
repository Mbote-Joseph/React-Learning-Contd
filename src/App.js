import "./App.css";
import { useState } from "react";

function Youtube(props) {
  const [subs, setSubs] = useState(props.subscribers);
  const [state, setState] = useState({
    count: 0,
    description: "My description",
  });

  function onHandleClick() {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  }

  const onSubmit = () => {
    setSubs((subs) => subs + 1);
  };

  return (
    <>
      <h1>Hello , {props.name} </h1>
      <button onClick={onSubmit}>Subscribers: {subs}</button>
      <p>{props.children}</p>
      <br />

      <h3>{state.count}</h3>
      <h6>
        {state.description}- {state.count}{" "}
      </h6>
      <button onClick={onHandleClick}>Click to change State</button>
    </>
  );
}

function Child() {
  return <>Child Component</>;
}

function App() {
  return (
    <div>
      <Youtube name="Joseph Mbote" subscribers={45}>
        {" "}
        Welcome to my youtube channel
        <br />
        <Child />
      </Youtube>
    </div>
  );
}

export default App;
