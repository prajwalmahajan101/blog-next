import ReactMarkdown from "react-markdown";

import PostHeader from "./PostHeader";

import classes from "@/styles/posts/post-detail/post-content.module.css";

const Dummy_post = {
  title: "Getting Started With Next Js",
  image: "getting-started-nextjs.png",
  excerpt:
    "NextJs is the React framework for production - its makes building fullstack React apps and sites a breeze and ships with built-in server side rendering (SSR)",
  date: "2002-02-10",
  slug: "getting-started-with-nextjs-1",
  content: "# This is my First post ",
};

const PostContent = () => {
  return (
    <article className={classes.content}>
      <PostHeader
        title={Dummy_post.title}
        image={`/images/posts/${Dummy_post.slug}/${Dummy_post.image}`}
      />
      <ReactMarkdown>{Dummy_post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
