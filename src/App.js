import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Movies from "./Movies";
import movies from "./Movies";
function App() {
  return (
    <div className="App">
      <Link to="/home">
        {" "}
        <h2>home</h2>
      </Link>
      <Link to="/contact">
        {" "}
        <h2>contact</h2>
      </Link>
      {movies.map((el) => (
        <div>
          <Link to={`/description/${el.id}`}>
            {" "}
            <h1>{el.title}</h1>
          </Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default App;