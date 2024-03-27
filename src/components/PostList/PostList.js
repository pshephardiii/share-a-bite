import Post from '../Post/Post'
import styles from './PostList.module.scss';
import { Cookie } from 'lucide-react'

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
        <div>
        <Cookie />
        <h3>No posts yet</h3>
        </div>
      );
    }
