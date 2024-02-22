import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function ProductListShopCards() {
  const categories = useSelector((state) => state.global.categories);

  const mostRating = categories.sort((a, b) => {
    return b.rating - a.rating;
  });

  return (
    <div className="flex  bg-lightGray justify-between gap-4 pb-12 px-24 sm:flex-col">
      {mostRating.slice(0, 6).map((category) => {
        return (
          <div key={category.id} className="w-[20%] relative sm:w-[100%]">
            <NavLink
              to={`/shopping/${
                category.code.includes("k:")
                  ? `kadin/${category.code.slice(2, category.code.length)}`
                  : `erkek/${category.code.slice(2, category.code.length)}`
              }`}
              key={category.id}
            >
              <img className="h-[100%]" src={category.img} />
              <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lightText">
                <h2 className="font-semibold text-xl">{category.title}</h2>
                <p className="text-center font-semibold text-lg">
                  {category.rating}
                </p>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
