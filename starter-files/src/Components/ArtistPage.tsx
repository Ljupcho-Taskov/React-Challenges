import React from "react";
import { useParams } from "react-router-dom";
import { ArtistType } from "../types/types";
import AlbumList from "./AlbumList";

interface Props {
  artists: ArtistType[];
}

const ArtistPage = ({ artists }: Props) => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id.toString() === id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div
          className="col d-flex align-items-center flex-column"
          key={artist.id}
        >
          <div className="d-flex justify-content-center">
            <img
              className="w-200"
              src={require(`../images/covers/${artist.cover}.jpg`)}
              alt={artist.name}
            />
          </div>
          <h3 className="mt-2">{artist.name}</h3>
          <p className="mt-2">{artist.bio}</p>
        </div>
      </div>
      <AlbumList artist={artist} />
    </div>
  );
};

export default ArtistPage;
