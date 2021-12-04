import { useState, useEffect } from "react";

// for router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// axios
import axios from "axios";

// css import
import "./assets/css/style.css"

// all components import
import Header from "./components/Header";
import Home from "./components//Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  // state
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // fetch initial data
  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then((res) => {
      setList(res.data);
    });
  }, [] );

  return (
    <div className="App">
      <BrowserRouter>

      {/* header */}
      <Header/>

        <Routes>
          {/* root path */}
          <Route path="/" exact element={ 
            <Home input={input} setInput={setInput} list={list} setList={setList} />
           }
          />

          {/* about */}
          <Route path="about" element={ <About/> } />

          {/* contact */}
          <Route path="contact" element={ <Contact/> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
