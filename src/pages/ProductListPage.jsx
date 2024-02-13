import Clients from "../ProductList/Clients";
import FilterComponent from "../ProductList/FilterComponent";
import ProductHeader from "../ProductList/ProductHeader";
import ProductListShopCards from "../ProductList/ProductListShopCards";
import ProductsCards from "../ProductList/ProductsCards";

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
