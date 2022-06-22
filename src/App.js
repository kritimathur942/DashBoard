import  Home from "./pages/home/Home";
import  Login  from "./pages/login/Login";
import  List  from "./pages/list/List";
import  New from "./pages/knew/New";
import  Single  from "./pages/singlepage/Single";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { productsInputs, userInputs } from "./formsource";
import "./style/dark.scss";
import {useContext } from "react";
import { DarkModeContext} from "/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/context/darkModeContext";


function App() {
const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark"  :  "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Login" element={<Login/>} />
            <Route path="users">
            <Route index element={<List/>} />
            <Route path=":userID" element={<Single/>} />
            <Route path="new"  element={<New inputs={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
            <Route index element={<List/>} />
            <Route path=":productID" element={<Single/>} />
            <Route path="new"  element={<New inputs={productsInputs} title="Add New Products"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;
