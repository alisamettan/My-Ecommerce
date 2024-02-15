import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FilterComponent() {
  return (
    <div className="gap-10 flex  justify-between items-center py-16 px-40 sm:flex-col">
      <h2 className=" font-bold text-lg">Showing all 12 results</h2>
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
        <form className="flex gap-6">
          <select
            className="border-2 rounded-md px-3 cursor-pointer"
            label="Sort By"
          >
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price Low-High</option>
            <option>Price High-Low</option>
          </select>

          <button
            size="lg"
            className="  bg-primaryColor text-lightText py-3 px-8 rounded-md"
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
}
/* <Select label="Sort By" size="lg">
            <Option>Popularity</Option>
            <Option>Newest</Option>
            <Option>Price Low-High</Option>
            <Option>Price High-Low</Option>
          </Select> */
