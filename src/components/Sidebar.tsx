import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions";
import { DefaultRootState } from "../constants/types";
import { Link } from "react-router-dom";



const Sidebar: React.FC = () => {
  const category = useSelector<DefaultRootState, DefaultRootState["category"]>(
    (state) => state.category
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // console.log("category", category);

  return (
    <div className="sidebar">
      <ul>
        {category.list.map((item) => (
          <Link
            to={`/gallery/search?limit=10&category_ids=${item.id}`}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
