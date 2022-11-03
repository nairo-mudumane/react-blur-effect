export declare module UnsplashGallery {
  export interface IPhotoLinks {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }

  export interface IPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string;
    alt_description?: string;
    links: IPhotoLinks;
    likes: number;
    liked_by_user: boolean;
  }
}
