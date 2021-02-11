import React from "react";
import { useImage } from "react-image";

interface LazyImageTypes {
  url: string;
  alt: string;
  width: string;
  height: string;
}

const LazyImage: React.FC<LazyImageTypes> = ({ url, alt, width, height }) => {
  const { src } = useImage({ srcList: url });
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default LazyImage;
