import PostGrid from "../posts/PostGrid";

import classes from "@/styles/home-page/featured-post.module.css";

const FeaturedPost = ({ featuredPosts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={featuredPosts} />
    </section>
  );
};
export default FeaturedPost;
