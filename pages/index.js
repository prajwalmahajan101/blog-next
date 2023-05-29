import Hero from "@/components/home-page/Hero";
import FeaturedPost from "@/components/home-page/FeaturedPost";
import { getFeaturedPosts } from "@/lib/post-utils";

const HomePage = ({ featuredPosts }) => {
  return (
    <>
      <Hero />
      <FeaturedPost featuredPosts={featuredPosts} />
    </>
  );
};

export const getStaticPost = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
    revalidate: 24 * 60 * 60,
  };
};

export default HomePage;
