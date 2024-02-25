import {
  faBorderAll,
  faList,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsCards from "./ProductsCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  scrollingAddProducts,
  setProductsActionCreator,
} from "../../store/actions/productAction";
import { useHistory, useParams } from "react-router-dom";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import useQueryParams from "../../hooks/useQueryParams";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const navItems = [
  ["Default", ""],
  ["Price Low to High", "price:asc"],
  ["Price High to Low", "price:desc"],
  ["Rating Low to High", "rating:asc"],
  ["Rating High to Low", "rating:desc"],
];

export default function FilterComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPick, setDropdownPick] = useState("Order By");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productList);
  const categories = useSelector((state) => state.global.categories);
  const { gender, category } = useParams();
  const [offset, setOffSet] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [categoryID, setCategoryID] = useState();

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

  const handleToggle = () => setDropdownOpen(!dropdownOpen);
  const handleHoverIn = () => setDropdownOpen(true);
  const handleHoverOut = () => setDropdownOpen(false);
  const [filterText, setFilterText] = useState("");
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(filterText);
  };

  const cleanFilter = () => {
    setFilterText("");
    setFilter("");
  };

  const handleSort = async (e) => {
    for (const item of navItems) {
      if (item[1] === e.target.name) {
        setDropdownPick(item[0]);
        setSort(item[1]);
        break;
      }
    }
  };

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
          filter: filter,
          sort: sort,
        })
      );
    }
    setHasMore(true);
    setOffSet(24);
  }, [filter, sort, categoryID]);

  const fetchMoreData = () => {
    dispatch(
      scrollingAddProducts({
        ...params,
        category: categoryID,
        sort: sort,
        filter: filter,
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
          <form
            onSubmit={handleFilter}
            className="flex items-center gap-6 sm:flex-col"
          >
            <div className="flex gap-[15px] justify-center items-center">
              <input
                type="text"
                name="filter"
                className="border border-[#DADADA] py-2 rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
                placeholder="Search"
                onClick={handleChange}
              ></input>
              <button onClick={cleanFilter}>
                <FontAwesomeIcon className="text-gray" icon={faXmark} />
              </button>
            </div>
            <Dropdown
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
              isOpen={dropdownOpen}
              toggle={handleToggle}
              className="text-sm leading-7 text-secondary rounded "
            >
              <DropdownToggle className="pl-3 py-2.5 border-1 text-gray border-[#DDDDDD] rounded hover:bg-gray-300 hover:text-black flex items-center justify-between min-w-[200px] gap-2">
                <p>{dropdownPick}</p>{" "}
                <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              </DropdownToggle>
              <DropdownMenu className="min-w-[200px]">
                {navItems.map((item, index) => {
                  return (
                    <DropdownItem
                      onClick={handleSort}
                      name={item[1]}
                      key={index}
                    >
                      {item[0]}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>

            <button
              size="lg"
              className="  bg-primaryColor text-lightText py-[12px] px-8 rounded-md"
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
        endMessage={
          <p className="text-[50px] m-auto text-red-600 flex justify-center py-10">
            You have seen it all!!
          </p>
        }
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
