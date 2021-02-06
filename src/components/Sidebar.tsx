import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions";
import { DefaultRootState } from "../constants/types";
import { NavLink } from "react-router-dom";
import useSearchParams from "../core/useSearchParams";

const Sidebar: React.FC = () => {
  const { category_ids: id } = useSearchParams(["category_ids"]);
  const category = useSelector<DefaultRootState, DefaultRootState["category"]>(
    (state) => state.category
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="sidebar">
      {category.isFetching ? (
        <div>Loading</div>
      ) : (
        <div className="sidebar-content">
          <h2>Category</h2>
          <ul>
            {category.list.map((item) => (
              <NavLink
                to={`/gallery/search?limit=10&category_ids=${item.id}`}
                key={item.id}
                activeClassName={item.id == id ? "active" : ""}
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
