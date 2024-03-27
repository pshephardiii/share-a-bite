import NavBar from '../../components/NavBar/NavBar'
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm'
import styles from './PostCreatePage.module.scss'

export default function PostCreatePage(
    {user, setUser}
){
    return(
        <>
          <div className={styles.postCreatePage}>
            <PostCreateForm user={user}/>
          </div>
          <NavBar user={user} setUser={setUser}/>
        </>
    )
}