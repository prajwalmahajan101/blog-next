import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getPostData = (postIdentifier) => {
	const slug = postIdentifier.replace(/\.md$/, "");
	const filePath = path.join(postsDir, `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);
	const postData = {
		...data,
		slug,
		content,
	};
	return postData;
};

export const getAllPostPaths = () => {
	const postFiles = fs.readdirSync(postsDir);
	return postFiles;
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
