import Post from '../Post/Post'
import styles from './PostList.module.scss';

export default function PostList({allPosts,user}) {
  console.log(allPosts)
    const posts= allPosts.map(post =>
      <Post
        key={post._id}
        user={user}
        post={post}
      />
    );
    return (
      posts ? 
        <main className={styles.PostList}>
          {posts}
        </main> :
        <h3>No Posts</h3>
      );
    }
