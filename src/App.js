import "./App.scss";
import Home from "./components/Home/Home";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Research from "./components/Research/Research";
import Publications from "./components/Publications/Publications";
import Software from "./components/Software/Software";
import Teaching from "./components/Teaching/Teaching";
import People from "./components/People/People";
import Positions from "./components/Positions/Positions";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <Router>
      <div className="app">
        <div
          className={
            activeNav === "home"
              ? "app__headerContainerHome"
              : "app__headerContainer"
          }
        >
          <Header
            activeNav={activeNav}
            setActiveNav={(navItem) => setActiveNav(navItem)}
          />
        </div>
        <div
          className={
            activeNav === "home"
              ? "app__contentContainerHome"
              : "app__contentContainer"
          }
        >
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/news"} element={<News />}></Route>
            <Route path={"/research"} element={<Research />}></Route>
            <Route path={"/publications"} element={<Publications />}></Route>
            <Route path={"/software"} element={<Software />}></Route>
            <Route path={"/teaching"} element={<Teaching />}></Route>
            <Route path={"/people"} element={<People />}></Route>
            <Route path={"/positions"} element={<Positions />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
