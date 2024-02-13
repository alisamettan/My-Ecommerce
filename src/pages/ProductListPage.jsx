import Clients from "../components/ProductList/Clients";
import FilterComponent from "../components/ProductList/FilterComponent";
import ProductHeader from "../components/ProductList/ProductHeader";
import ProductListShopCards from "../components/ProductList/ProductListShopCards";
import ProductsCards from "../components/ProductList/ProductsCards";

export default function ProductListPage() {
  return (
    <>
      <ProductHeader />
      <ProductListShopCards />
      <FilterComponent />
      <ProductsCards />
      <Clients />
    </>
  );
}
