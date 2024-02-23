import React from "react";
import { useParams } from "react-router-dom";
import { ArtistType } from "../types/types";

interface Props {
  artists: ArtistType[];
}

const AlbumPage = ({ artists }: Props) => {
  const { id, albumId } = useParams();
  const artist = artists.find((a) => a.id.toString() === id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const album = artist.albums.find((a) => a.albumId === albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col py-5 d-flex align-items-center flex-column">
          <div className="mb-3">
            <img
              className="w-200"
              src={require(`../images/albums/${album.cover}.jpg`)}
              alt={album.title}
            />
          </div>

          <h5>
            Title: <span className="normal-font">{album.title}</span>
          </h5>
          <h5>
            Year: <span className="normal-font">{album.year}</span>
          </h5>
          <h5>
            Price: <span className="normal-font">${album.price}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
