import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <header>
        <MyNavbar />
      </header>

      <main>
        <Homepage />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
