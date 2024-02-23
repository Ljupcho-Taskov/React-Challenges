import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArtistType, AlbumType } from "../types/types";

interface Props {
  artist: ArtistType;
}

const AlbumList = ({ artist }: Props) => {
  const { id } = useParams();

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="row">
      <div className="col d-flex flex-wrap">
        {artist.albums.map((album: AlbumType) => (
          <div className="w-50" key={album.albumId}>
            <Link to={`/artist/${id}/${album.albumId}`}>
              <img
                src={require(`../images/albums/${album.cover}.jpg`)}
                alt={album.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
