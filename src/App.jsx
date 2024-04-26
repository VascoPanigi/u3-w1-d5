import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>

      <main>
        <Homepage />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
