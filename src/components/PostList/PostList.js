import Post from '../Post/Post'
import styles from './PostList.module.scss';

export default function PostList({allPosts }) {
    const posts= allPosts.map(post =>
      <Post
        key={post._id}
        post={post}
      />
    );
    return (
        <main className={styles.PostList}>
          {posts}
        </main>
      );
    }
