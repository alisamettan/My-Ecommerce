import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./layouts/Main";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
