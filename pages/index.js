import Hero from "@/components/home-page/Hero";
import FeaturedPost from "@/components/home-page/FeaturedPost";

const Dummy_post = [
  {
    title: "Getting Started With Next Js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - its makes building fullstack React apps and sites a breeze and ships with built-in server side rendering (SSR)",
    date: "2002-02-10",
    slug: "getting-started-with-nextjs-1",
  },
  {
    title: "Getting Started With Next Js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - its makes building fullstack React apps and sites a breeze and ships with built-in server side rendering (SSR)",
    date: "2002-02-10",
    slug: "getting-started-with-nextjs-2",
  },
  {
    title: "Getting Started With Next Js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - its makes building fullstack React apps and sites a breeze and ships with built-in server side rendering (SSR)",
    date: "2002-02-10",
    slug: "getting-started-with-nextjs-3",
  },
  {
    title: "Getting Started With Next Js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - its makes building fullstack React apps and sites a breeze and ships with built-in server side rendering (SSR)",
    date: "2002-02-10",
    slug: "getting-started-with-nextjs-4",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPost featuredPosts={Dummy_post} />
    </>
  );
};
export default HomePage;
