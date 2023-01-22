import "./App.css";
import { Fragment, useState, useRef, React, Suspense } from "react";
const Test = React.lazy(() => import("./Test"));

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
  // useRef()
  const inputEl = useRef(true);

  const handleCardClick = () => {
    setCount((count) => count + 1);
    // inputEl.focus();
    console.log(inputEl);
    inputEl.current.focus();
  };

  return (
    <Fragment>
      <button onClick={handleCardClick}>Click </button>
      <h1>My Card</h1>
      <h4>{count}</h4>

      <input type="text" ref={inputEl} />
      {/* Lazy Loading is mostly applicable with routing      */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Test />
      </Suspense>
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
