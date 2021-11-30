// css import
import "./assets/css/style.css"
// all components import
import AllList from "./components/AllList";
import Form from "./components/Form";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <AllList/>
    </div>
  );
}

export default App;
