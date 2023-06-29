import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/themeContext";
import { AuthContext } from "./context/authContext";
import { useHotel, userColumns } from "./datatableSource";
import NewHotel from "./pages/newHotel/NewHotel";
import Register from "./pages/register/register";
import OTP from "./pages/OTP/otp";
import Changepassword from "./pages/ChangePassword/ChangePassword.js";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Protected = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route part="/">
            <Route element={<Login />} path="login"></Route>
            <Route element={<Register />} path="register"></Route>
            <Route element={<OTP />} path="otp"></Route>
            <Route element={<Changepassword />} path="changepassword"></Route>
            <Route
              element={
                <Protected>
                  <Home />
                </Protected>
              }
              index
            ></Route>
            <Route path="users">
              <Route
                element={
                  <Protected>
                    <List title="Add New User" columns={userColumns} />
                  </Protected>
                }
                index
              ></Route>
              <Route
                element={
                  <Protected>
                    <Single />
                  </Protected>
                }
                path=":userId"
              ></Route>
              <Route
                element={
                  <Protected>
                    <New title="Add New User" inputs={userInputs} />
                  </Protected>
                }
                path="new"
              ></Route>
            </Route>
            <Route path="hotels">
              <Route
                element={
                  <Protected>
                    <List title="Add New Hotel" columns={useHotel} />
                  </Protected>
                }
                index
              ></Route>
              <Route
                element={
                  <Protected>
                    <Single />
                  </Protected>
                }
                path=":hotelId"
              ></Route>
              <Route
                element={
                  <Protected>
                    <NewHotel title="Add New Hotel" inputs={productInputs} />
                  </Protected>
                }
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
