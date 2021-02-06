import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions";
import { DefaultRootState } from "../constants/types";

const Sidebar: React.FC = () => {
  const categories = useSelector<
    DefaultRootState,
    DefaultRootState["categories"]
  >((state) => state.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log("categories", categories);

  return (
    <div className="sidebar">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
