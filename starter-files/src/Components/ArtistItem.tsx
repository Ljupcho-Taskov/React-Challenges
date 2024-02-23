import React from "react";
import { Link } from "react-router-dom";
import { ArtistType } from "../types/types";

interface Props {
  artist: ArtistType;
}

const ArtistItem = ({ artist }: Props) => {
  return (
    <Link to={`/artist/${artist.id}`}>
      <div className="col-12 mt-3">
        <div className="position-relative">
          <img src={require(`../images/covers/${artist.cover}.jpg`)} alt="" />
          <span className="artist-name">{artist.name}</span>
        </div>
      </div>
    </Link>
  );
};
export default ArtistItem;
