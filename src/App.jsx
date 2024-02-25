import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./layouts/Main";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserVerifyActionCreator } from "./store/actions/userAction";
import { setCategoriesActionCreator } from "./store/actions/globalAction";
import { setProductsActionCreator } from "./store/actions/productAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserVerifyActionCreator());
    dispatch(setCategoriesActionCreator());
    dispatch(setProductsActionCreator());
  }, []);
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
