import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <main classsName="container">
        <NavBar />
        <Counters />
      </main>
    </>
  );
}

export default App;
