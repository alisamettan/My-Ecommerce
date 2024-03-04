import { Route, useHistory } from "react-router-dom";
import CreateOrderPage from "../../pages/CreateOrderPage";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    let redirectTimer;

    if (!token) {
      toast.info("You need to be logged in to continue on this page!!!", {
        autoClose: 3000,
        position: "top-center",
      });

      redirectTimer = setTimeout(() => {
        history.push({
          pathname: "/login",
          state: { referrer: history.location.pathname },
        });
      }, 3000);
    }
  }, [token]);

  return token ? (
    <Route>
      <CreateOrderPage />
    </Route>
  ) : null;
}
