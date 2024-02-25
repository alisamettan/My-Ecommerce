import Clients from "../components/ProductList/Clients";
import FilterComponent from "../components/ProductList/FilterComponent";
import ProductHeader from "../components/ProductList/ProductHeader";
import ProductListShopCards from "../components/ProductList/ProductListShopCards";

export default function ProductListPage() {
  return (
    <>
      <ProductHeader />
      <ProductListShopCards />
      <FilterComponent />
      <Clients />
    </>
  );
}
