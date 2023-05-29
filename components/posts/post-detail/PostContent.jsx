import ReactMarkdown from "react-markdown";
import Image from "next/image";

import PostHeader from "./PostHeader";

import classes from "@/styles/posts/post-detail/post-content.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = ({ post }) => {
	const customRenders = {
		// img(image) {
		// 	return (
		// 		<Image
		// 			src={`/images/posts/${post.slug}/${image.src}`}
		// 			alt={image.alt}
		// 			width={600}
		// 			height={300}
		// 		/>
		// 	);
		// },
		p(paragraph) {
			const { node } = paragraph;
			if (node.children[0].tagName === "img") {
				const image = node.children[0];

				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const { className, children } = code;
			const language = className.split("-")[1];
			return (
				<SyntaxHighlighter style={darcula} language={language}>
					{children}
				</SyntaxHighlighter>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader
				title={post.title}
				image={`/images/posts/${post.slug}/${post.image}`}
			/>
			<ReactMarkdown components={customRenders}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
};
export default PostContent;
