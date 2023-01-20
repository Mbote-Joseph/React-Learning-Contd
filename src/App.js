import "./App.css";
import { Fragment, useState } from "react";

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
    <Fragment>
      <h1>Hello , {props.name} </h1>
      <button onClick={onSubmit}>Subscribers: {subs}</button>
      <p>{props.children}</p>
      <br />

      <h3>{state.count}</h3>
      <h6>
        {state.description}- {state.count}{" "}
      </h6>
      <button onClick={onHandleClick}>Click to change State</button>
    </Fragment>
  );
}

function Child() {
  return <div>Child Component</div>;
}

function Card() {
  const [count, setCount] = useState(0);

  const handleCardClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <Fragment>
      <button onClick={handleCardClick}>Click </button>
      <h1>My Card</h1>
      <h4>{count}</h4>
    </Fragment>
  );
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
      <br />
      <br />
      <Card />
    </div>
  );
}

export default App;
