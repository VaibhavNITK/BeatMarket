import React from "react";
import { ListItem } from "@material-tailwind/react";

export default function ListItems({ song }) {
  const { id, title, releaseDate, likes, price } = song;

  return (
    <div className="bg-gray-100 my-2 rounded-3xl">
      <ListItem
        key={id}
        className="font-extrabold text-md hover:text-blue-600 my-5 gap-10 justify-between"
      >
        <h2 className="text-2xl font-semibold mx-5 px-5">{title}</h2>
        <div className="justify-center flex flex-row gap-8">
          <p className="text-sm px-5">Release Date: {releaseDate}</p>
          <p className="font-semibold text-sm px-5 mx-5">Likes: {likes}</p>
          <p className="font-bold text-sm px-5">Price: {price}</p>
        </div>
      </ListItem>
    </div>
  );
}
