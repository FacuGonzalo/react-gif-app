import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
