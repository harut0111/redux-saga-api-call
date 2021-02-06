import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultRootState } from "../constants/types";
import useSearchParams from "../core/useSearchParams";
import { getImages } from "../redux/actions";



const Gallery: React.FC = () => {
  const image = useSelector<DefaultRootState, DefaultRootState["image"]>(
    (state) => state.image
  );
  const dispatch = useDispatch();
  const params = useSearchParams(["limit", "category_ids"]);

  React.useEffect(() => {
    dispatch(getImages(params));
  }, [dispatch, params.category_ids, params.limit]);

  const handleOnMoreImagesClick = () => {
      const {limit, category_ids} = params;
      return `/gallery/search?limit=${+limit + 10}&category_ids=${category_ids}`
  }
  

  return (
    <div className="gallery">
      <section className="photos">
        {image.list.map(({ id, url, height, width }) => (
          <img key={id} src={url} height={height} width={width} />
        ))}
      </section>
      <div>
          <Link to={handleOnMoreImagesClick}>more images</Link>
      </div>
    </div>
  );
};

export default Gallery;
