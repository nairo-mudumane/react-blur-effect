import { UnsplashGallery } from "../@types";
import { api } from "./api";

export async function getAllPhotos(): Promise<UnsplashGallery.IPhoto> {
  const photos: UnsplashGallery.IPhoto = await api
    .get<UnsplashGallery.IPhoto>(
      `/photos?client_id=${import.meta.env.VITE_UNSPLASH_CLIENT_ID}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });

  return photos;
}
