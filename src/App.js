import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import List from "./pages/list/List";
import ListProduct from "./component/table/Table";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { createContext, useContext, useState } from "react";
import { DarkMode } from "@mui/icons-material";
import { DarkModeContext } from "./context/themeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route part="/">
            <Route element={<Home />} index></Route>
            <Route element={<Login />} path="login"></Route>
            <Route path="users">
              <Route element={<List />} index></Route>
              <Route element={<Single />} path=":userId"></Route>
              <Route
                element={<New title="Add New User" inputs={userInputs} />}
                path="new"
              ></Route>
            </Route>
            <Route path="products">
              <Route element={<List />} index></Route>
              <Route element={<Single />} path=":productId"></Route>
              <Route
                element={<New title="Add New Product" inputs={productInputs} />}
                path="new"
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
