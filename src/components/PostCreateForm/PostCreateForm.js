import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utilities/posts-api";
import { Rating } from "react-simple-star-rating";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
import * as restaurantsAPI from "../../utilities/restaurants-api";
import styles from "./PostCreateForm.module.scss";
import { Image } from "lucide-react";

export default function PostCreateForm({ user }) {
  const [post, setNewPost] = useState({
    title: "",
    body: "",
    pic: "",
    dish: "",
    restaurant: "",
    rating: 0,
  });
  const [restaurants, setRestaurants] = useState([]);

 
  const options = restaurants.map((eatery, i) => {
    return (
      <option value={`${eatery._id}`} key={`${eatery._id}`}>{eatery.name}</option>
    )
  })

  console.log(options);

  useEffect(function () {
    async function fetchAllRestaurants() {
      try {
        const data = await restaurantsAPI.getAllRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllRestaurants();
  }, []);

  function handleChange(e) {
    setNewPost({ ...post, [e.target.name]: e.target.value });
  }

  const navigateTo = useNavigate();
  //handle the rating star
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    setNewPost({ ...post, rating: rate });
  };

  // after submitting the new post, go to the Homepage
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newPost = await createPost(post);
      // return newPost;
      navigateTo("/home");
      console.log(newPost);
    } catch (error) {
      console.error("Can not create a post");
    }
  }

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    const imageRef = ref(storage, `images/${imageFile.name + v4()}`);

    const uploadTask = uploadBytesResumable(imageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
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
        console.error("Error getting uploding pic:", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setNewPost({ ...post, pic: downloadURL });
        });
      }
    );
  };

  return (
    <div className={styles.postCreateFormContainer}>

      <form onSubmit={handleSubmit} className={styles.postCreateForm}>

        <div className={styles.logoContainer}>
            <img className={styles.logo} src="https://i.imgur.com/TxFQTR4.png"/>
            <div className={styles.companyName}>
                <h1>Share-A-Bite</h1>
            </div>
        </div>
        
        <h1>New Post</h1>

        <div className={styles.textInputContainer}>

          <input
            type="text"
            placeholder="Title"
            value={post.title}
            name="title"
            onChange={handleChange}
            className={styles.titleBox}
          />

          <input
            type="text"
            placeholder="Write a caption or message..."
            value={post.body}
            name="body"
            onChange={handleChange}
            className={styles.inputBox}
          />

        </div>

        <div className={styles.imageInputContainer}>

          <div className={styles.uploadDescr}>
            <span className={styles.uploadPhoto}>
                Upload Photo
            </span>

            <span className={styles.imageIcon}>
                <Image fontSize='1rem'/>
            </span>
          </div>

          <input
              type="file"
              placeholder="Pic"
              onChange={handleImageUpload}
              className={styles.fileUpload}
          />

        </div>


        <div className={styles.dishName}>

          <span className={styles.mealName}>
            Menu Item: 
          </span>

          <input
            type="text"
            placeholder=""
            value={post.dish}
            name="dish"
            onChange={handleChange}
            className={styles.dishBox}
          />

        </div>

        <div className={styles.ratingContainer}>

          <span className={styles.rating}>
            Rating: 
          </span>

          <Rating onClick={handleRating} value={post.rating} />

        </div>

        <div className={styles.restaurantContainer}>

          <span className={styles.restaurant}>
            Restaurant: 
          </span>

          <select
            className={styles.restaurantOptions}
            name="restaurant"
            onChange={handleChange}
            value={post.restaurant} // Set the value to post.restaurant
          >
            <option value='none'>Select</option>
            {options}
          </select>
        </div>

        <div className={styles.submitContainer}>
          <input type="submit" value="Post" />
        </div>

      </form>

    </div>
  )
}
