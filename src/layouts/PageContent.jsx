import { Switch, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";

export default function PageContent() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shopping">
        <ProductListPage />
      </Route>
    </Switch>
  );
}
