import { Switch, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import BlogPage from "../pages/BlogPage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export default function PageContent() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shopping/:gender?/:category?" exact>
        <ProductListPage />
      </Route>
      <Route path="/product" exact>
        <ProductPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/team" exact>
        <TeamPage />
      </Route>
      <Route path="/blog" exact>
        <BlogPage />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}
