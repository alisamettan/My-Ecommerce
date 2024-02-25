import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsCards from "./ProductsCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  scrollingAddProducts,
  setProductCount,
  setProductsActionCreator,
} from "../../store/actions/productAction";
import { useHistory, useParams } from "react-router-dom";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import useQueryParams from "../../hooks/useQueryParams";

export default function FilterComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.productList);
  const categories = useSelector((state) => state.global.categories);
  const { gender, category } = useParams();
  const [offset, setOffSet] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [categoryID, setCategoryID] = useState();
  /* const [queryParams, setQueryParams] = useQueryParams(); */
  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });
  const totalProductCount = useSelector((store) => store.product.totalProducts);
  const productFetching = useSelector(
    (store) => store.product.fetchState == FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState == FETCH_STATES.Fetched
  );
  const params = {
    limit: 24,
    offset: offset,
  };

  //Filter methods
  function changeFilter(e) {
    setFilterParams({
      ...filterParams,
      filter: e.target.value,
    });
  }

  function changeSort(e) {
    setFilterParams({
      ...filterParams,
      sort: e.target.value,
    });
  }
  function submitHandle(e) {
    e.preventDefault();
    /* setQueryParams(filterParams); */
  }
  useEffect(() => {
    const categoryCode = gender?.slice(0, 1) + ":" + category;
    const categoryRec = categories?.find((c) => c.code === categoryCode);
    setCategoryID(categoryRec?.id);
  }, [gender, category, categories]);

  useEffect(() => {
    if ((category && categoryID) || !category) {
      dispatch(
        setProductsActionCreator({
          category: categoryID,
          limit: params?.limit,
          offset: params?.offset,
        })
      );
    }
    setHasMore(true);
    setOffSet(24);
  }, [categoryID]);

  const fetchMoreData = () => {
    dispatch(
      scrollingAddProducts({
        /*  ...queryParams, */
        ...params,
        category: categoryID,
      })
    );
    setOffSet(offset + 24);
  };

  useEffect(() => {
    if (totalProductCount && products?.length === totalProductCount) {
      setHasMore(false);
    }
  }, [products]);

  const productsCount = products?.length;

  return (
    <div>
      <div className="gap-10 flex  justify-between items-center py-16 px-40 sm:flex-col">
        <h2 className=" font-bold text-lg">
          Showing all {productsCount} results
        </h2>
        <div className="flex items-center gap-7  font-semibold text-lg p-2">
          <h3 className="font-bold text-lg">Views:</h3>
          <FontAwesomeIcon
            className="h-6 w-6 border-2 p-2 rounded-md text-textColor"
            icon={faBorderAll}
          />
          <FontAwesomeIcon
            className="h-6 w-6 border-2 p-2 rounded-md text-textColor"
            icon={faList}
          />
        </div>
        <div className=" gap-52 items-center">
          <form onSubmit={submitHandle} className="flex gap-6 sm:flex-col">
            <div className="flex gap-[15px] justify-center items-center">
              <input
                type="text"
                name="filter"
                className="border border-[#DADADA] py-3 rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
                placeholder="Search"
                onClick={changeFilter}
              ></input>
            </div>
            <select
              className="border-2 rounded-md px-3 cursor-pointer"
              label="Sort By"
              onClick={changeSort}
            >
              <option>Popularity</option>
              <option key="rating:asc" value="rating:asc">
                Rating Low-High
              </option>
              <option key="rating:desc" value="rating:desc">
                Rating High-Low
              </option>
              <option key="price:asc" value="price:asc">
                Price Low-High
              </option>
              <option key="price:desc" value="price:desc">
                Price High-Low
              </option>
            </select>

            <button
              size="lg"
              className="  bg-primaryColor text-lightText py-3 px-8 rounded-md"
              type="submit"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
      <InfiniteScroll
        dataLength={productsCount}
        next={fetchMoreData}
        className="infiniteScroll"
        loader={<p className="text-center">loading...</p>}
        endMessage={<p>You have seen it all</p>}
        hasMore={hasMore}
      >
        <ProductsCards
          gender={gender}
          category={category}
          products={products}
          categoryID={categoryID}
          productFetching={productFetching}
          productFetched={productFetched}
        />
      </InfiniteScroll>
    </div>
  );
}
/* <Select label="Sort By" size="lg">
            <Option>Popularity</Option>
            <Option>Newest</Option>
            <Option>Price Low-High</Option>
            <Option>Price High-Low</Option>
          </Select> */
