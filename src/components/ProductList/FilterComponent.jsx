import {
  faBorderAll,
  faList,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductsCards from "./ProductsCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFetchedState,
  setProductsActionCreator,
} from "../../store/actions/productAction";
import { useParams } from "react-router-dom";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import ReactPaginate from "react-paginate";
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
  const pageCount = useSelector((state) => state.product.pageCount);
  const { gender, category } = useParams();
  const limit = 24;
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [categoryID, setCategoryID] = useState();
  const productFetching = useSelector(
    (store) => store.product.fetchState == FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState == FETCH_STATES.Fetched
  );

  const productsCount = useSelector((state) => state.product.productCount);

  const endOffset = offset + limit;
  const currentItems = products?.slice(offset, endOffset);

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

  const handlePageClick = (e) => {
    const newOffset = (e.selected * limit) / productsCount;
    setOffset(newOffset);
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
  };

  useEffect(() => {
    const categoryCode = gender?.slice(0, 1) + ":" + category;
    const categoryRec = categories?.find((c) => c.code == categoryCode);
    setCategoryID(categoryRec?.id);
    setHasMore(true);
  }, [gender, category, categories]);

  useEffect(() => {
    productFetching;
    if (hasMore)
      dispatch(
        setProductsActionCreator({
          category: categoryID,
          filter: filter,
          sort: sort,
          limit,
          offset,
        })
      );
  }, [filter, sort, categoryID, offset, hasMore]);

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
      <ProductsCards
        gender={gender}
        category={category}
        products={currentItems}
        categoryID={categoryID}
        productFetching={productFetching}
        productFetched={productFetched}
      />
      <ReactPaginate
        className="flex justify-center pb-10"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item text-main"
        pageLinkClassName="page-link text-main"
        previousClassName="page-item text-main"
        previousLinkClassName="page-link text-main"
        nextClassName="page-item text-main"
        nextLinkClassName="page-link text-main"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
/* <Select label="Sort By" size="lg">
            <Option>Popularity</Option>
            <Option>Newest</Option>
            <Option>Price Low-High</Option>
            <Option>Price High-Low</Option>
          </Select> */
