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

export default function Cards({ item }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/producers/${item._id}`); // Assuming 'item' has an '_id' property
  }

  const formattedDate = item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '';

  return (
    <div className="shadom-5xl my-7 px-5">
      <Card
        sx={{ backgroundColor: "#ccc", cursor: "pointer" }}
        onClick={handleClick}
      >
        <CardHeader title={item.name} subheader={formattedDate} />
        <CardMedia
          component="img"
          height="150"
          image="images/images.jpeg" // Update the image source as needed
          alt="Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.name} {/* Assuming 'item' has a 'description' property */}
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
