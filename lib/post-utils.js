import fs from "fs";
import path from "path";
import matter from "grey-matter";

const postsDir = path.join(__dirname, "..", "posts");

const getPostData = (fileName) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const slug = fileName.replace(/\.md$/, "");
  const postData = {
    ...data,
    slug,
    content,
  };
  return postData;
};

export const getAllPost = () => {
  const postFiles = fs.readdirSync(postsDir);
  const postsData = postFiles.map((postFile) => getPostData(postFile));
  const sortedData = postsData.sort((postA, postB) =>
    postA.date > postB ? -1 : 1
  );
  return sortedData;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPost();
  const featuredPost = allPosts.filter((post) => post.isFeatured);
  return featuredPost;
};
