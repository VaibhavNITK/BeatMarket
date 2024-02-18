import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/producers");
  }
  return (
    <div className="shadom-5xl rounded-6xl">
      <Card
        sx={{ backgroundColor: "#ccc", cursor: "pointer" }}
        onClick={handleClick}
      >
        <CardHeader title="Beat Title" subheader="Date" />
        <CardMedia
          component="img"
          height="200"
          image="images/images.jpeg"
          alt="Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Producer Name
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
