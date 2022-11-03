import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { getAllPhotos } from "./services";

function App() {
  const {
    isLoading,
    error,
    data: photos,
  } = useQuery(["/photos"], getAllPhotos);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{String(error)}</div>;
  }

  return (
    <div className="mx-auto container">
      <div className="pt-10 grid gap-2 grid-cols-3">
        {photos!.map((photo) => (
          <Blurhash
            key={photo.id}
            hash={photo.blur_hash}
            width={"100%"}
            height="10rem"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
