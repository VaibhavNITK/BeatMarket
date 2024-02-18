import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Cards() {
  const navigate = useNavigate();
  const [producerName, setProducerName] = useState("");
  const [AlbumTitle, setAlbumTitle] = useState("");
  const [date, setDate] = useState();

  function handleClick() {
    navigate(`/producers?producer=${producerName}`);
  }

  return (
    <div className="shadom-5xl my-7 px-5">
      <Card
        sx={{ backgroundColor: "#ccc", cursor: "pointer" }}
        onClick={handleClick}
      >
        <CardHeader title="Beat Title" subheader="Date" />
        <CardMedia
          component="img"
          height="150"
          image="images/images.jpeg"
          alt="Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Producer Name
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
