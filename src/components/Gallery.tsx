import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { DefaultRootState } from "../constants/types";
import Loader from "../core/loader";
import useSearchParams from "../core/useSearchParams";
import { getImages, getMoreImages } from "../redux/actions";

const Gallery: React.FC = () => {
  const image = useSelector<DefaultRootState, DefaultRootState["image"]>(
    (state) => state.image
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useSearchParams(["limit", "category_ids"]);

  React.useEffect(() => {
    dispatch(getImages(params));
  }, [dispatch, params.category_ids]);

  const handleOnMoreImagesClick = () => {
    dispatch(getMoreImages(params));
    const { limit, category_ids } = params;
    history.push(
      `/gallery/search?limit=${+limit + 10}&category_ids=${category_ids}`
    );
  };

  if (!params.category_ids)
    return <div className="gallery empty">Please choose the category</div>;

  return (
    <div className="gallery">
      {image.isFetching ? (
        <Loader className="gallery-load" />
      ) : (
        <>
          <section className="photos">
            {image.list.map(({ id, url, height, width }) => (
              <img key={id} src={url} height={height} width={width} />
            ))}
          </section>
          <div className="more-images" onClick={handleOnMoreImagesClick}>
            load more images
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
