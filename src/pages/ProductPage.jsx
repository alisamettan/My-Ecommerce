import Clients from "../components/ProductList/Clients";
import Feature from "../components/ProductPageComp/Feature";
import ProductCard from "../components/ProductPageComp/ProductCard";
import ProductsBestSeller from "../components/ProductPageComp/ProductsBestSeller";
import NavBarDark from "../layouts/NavBarDark";

export default function ProductPage() {
  return (
    <>
      <ProductCard />
      <Feature />
      <ProductsBestSeller />
      <Clients />
    </>
  );
}
