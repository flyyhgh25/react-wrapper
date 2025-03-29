import "./App.css";
import { Greeting } from "./components/Greeting";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container-main">
      <Navbar />
      <Greeting/>
    </div>
  );
}

export default App;
