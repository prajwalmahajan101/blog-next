import AllPost from "@/components/posts/AllPost";

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

const AllPostsPage = ({ posts }) => {
  return <AllPost posts={Dummy_post} />;
};
export default AllPostsPage;
