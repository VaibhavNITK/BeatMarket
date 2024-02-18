import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../configuration/firebase";
import axios from "axios";

export default function Demo() {
  const [song, setSong] = useState(null);
  const [img, setImg] = useState(null);
  const [songPerc, setSongPerc] = useState(0);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({});

  const handleSongChange = (e) => {
    const file = e.target.files[0];
    setSong(file);
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  useEffect(() => {
    song && uploadFile(song, "songurl");
  }, [song]);

  useEffect(() => {
    img && uploadFile(img, "imgurl");
  }, [img]);

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "imgurl" ? "images/" : "songs/";
    const fileName = Date.now() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgurl"
          ? setImgPerc(Math.round(progress))
          : setSongPerc(Math.round(progress));

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Error uploading file:", error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('Download URL:', downloadURL);
          setInputs((prev) => ({
            ...prev,
            [fileType]: downloadURL,
          }));
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your axios post request here, use `inputs` for the uploaded URLs
      await axios.post("", { ...inputs });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="song">Song:</label>{songPerc > 0 && `Uploading: ${songPerc}%`}
        <input
          type="file"
          name="song"
          accept=".mp3"
          onChange={handleSongChange}
        />
        <label htmlFor="img">Image:</label>{imgPerc > 0 && `Uploading: ${imgPerc}%`}
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImgChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
