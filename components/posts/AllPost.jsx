import classes from "@/styles/posts/all-posts.module.css";
import PostGrid from "./PostGrid";
const AllPost = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};
export default AllPost;
