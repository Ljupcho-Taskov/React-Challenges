export interface AlbumType {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}

export interface ArtistType {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: AlbumType[];
}
