import { useState } from "react";

// css import
import "./assets/css/style.css"
// all components import
import AllList from "./components/AllList";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {

  // state
  const [input, setInput] = useState("");
  const[list, setList] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Form input={input} setInput={setInput} list={list} setList={setList} />
      <AllList list={list} setList={setList} />
    </div>
  );
}

export default App;
