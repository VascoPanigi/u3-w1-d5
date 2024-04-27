import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";
import MyFooter from "./components/MyFooter";
// import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div>
      <header>
        <MyNavbar />
      </header>

      <main>
        <Homepage />

        {/* profile page should be visualized without navbar and footer  */}
        {/* <MyProfile /> */}
      </main>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
