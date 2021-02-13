import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions";
import { DefaultRootState } from "../constants/types";
import { NavLink } from "react-router-dom";
import useSearchParams from "../core/useSearchParams";
import Loader from "../core/loader";

const Sidebar: React.FC = () => {
  const { category_ids: id } = useSearchParams(["category_ids"]);
  const category = useSelector<DefaultRootState, DefaultRootState["category"]>(
    (state) => state.category
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    let isSubscribed = true;
    isSubscribed && dispatch(getCategories());
    return () => {isSubscribed = false};
  }, [dispatch]);

  return (
    <div className="sidebar">
      {category.isFetching ? (
        <Loader className="sidebar-load" />
      ) : (
        <div className="sidebar-content">
          <h2>Category</h2>
          <ul>
            {category.list.map((item) => (
              <NavLink
                to={`/gallery/search?limit=10&category_ids=${item.id}`}
                key={item.id}
                activeClassName={item.id === +id ? "active" : ""}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
