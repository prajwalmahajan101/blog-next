import AllPost from "@/components/posts/AllPost";
import { getAllPost } from "@/lib/post-utils";

const AllPostsPage = ({ posts }) => {
	return <AllPost posts={posts} />;
};

export const getStaticProps = () => {
	const posts = getAllPost();
	return {
		props: {
			posts,
		},
		revalidate: 24 * 60 * 60,
	};
};

export default AllPostsPage;
