import React from "react";
import { ArtistType } from "../types/types";
import ArtistItem from "./ArtistItem";

interface Props {
  artists: ArtistType[];
}

const ArtistsList = ({ artists }: Props) => {
  return (
    <div className="container">
      <div className="row py-3">
        <h2 className="text-center w-100">Browse the artists</h2>
        {artists.map((artist) => {
          return <ArtistItem key={artist.id} artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default ArtistsList;
