import { Component } from "react"
import { signUp } from '../../utilities/users-service'
import styles from "./SignUpForm.module.scss"
import { CircleX } from 'lucide-react'
import {storage} from '../../firebase'
import {ref, getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import {v4} from 'uuid'

export default class SignUpForm extends Component {
state = {
  name: '',
  pic:'',
  email: '',
  password: '',
  confirm: '',
  error: ''
};

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};


handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...this.state};
    delete formData.confirm;
    delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData);
    this.props.setUser(user);
  } catch {
    // An error happened on the server
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

   handleImageUpload = (e) => {

  const imageFile = e.target.files[0];
  const imageRef = ref(storage, `images/${imageFile.name + v4()}`);

  const uploadTask = uploadBytesResumable(imageRef, imageFile);

  uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.error('Error getting uploding pic:', error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      this.setState({ ...this.state, pic: downloadURL})
    });
  }
);
}

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
      <div className={styles.popupContainer}>
        <button className={styles.closePopup} onClick={(e)=>{this.props.setShowSignUpForm(false)}}><CircleX /></button>
        <div className={styles.formContainer}>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Profile Photo</label>
            <input type="file" placeholder="pic" onChange={this.handleImageUpload} />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>Sign Up</button>
          </form>
        </div>
      <p className={styles.errorMessage}>&nbsp;{this.state.error}</p>
    </div>
  )
}
}