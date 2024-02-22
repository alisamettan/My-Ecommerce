import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./layouts/Main";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserVerifyActionCreator } from "./store/actions/userAction";
import { setCategoriesActionCreator } from "./store/actions/globalAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserVerifyActionCreator());
    dispatch(setCategoriesActionCreator());
  }, []);
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
