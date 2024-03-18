import Post from '../Post/Post'
import styles from './PostList.module.scss';

export default function PostList({allPosts,handleLikePost,handleUnlikePost}) {
    const posts= allPosts.map(post =>
      <Post
        key={post._id}
        post={post}
        handleLikePost={handleLikePost} 
        handleUnikePost={handleUnlikePost} 
      />
    );
    return (
        <main className={styles.PostList}>
          {posts}
        </main>
      );
    }
