import PostContent from "@/components/posts/post-detail/PostContent";
import { getAllPostPaths, getPostData } from "@/lib/post-utils";

const PostDetailsPage = ({ post }) => {
	return <PostContent post={post} />;
};

export const getStaticProps = (ctx) => {
	const { slug } = ctx.params;
	const post = getPostData(slug);
	return {
		props: {
			post,
		},
		revalidate: 24 * 60 * 60,
	};
};

export const getStaticPaths = () => {
	const postFiles = getAllPostPaths();
	const slugs = postFiles.map((file) => file.replace(/\.md$/, ""));
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
};
export default PostDetailsPage;
