import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	...(isGitHubPages
		? {
			output: "export",
			basePath: "/portfolio_website",
			assetPrefix: "/portfolio_website/",
			trailingSlash: true,
		}
		: {
			trailingSlash: false,
		}),
	experimental: {
		mdxRs: true,
	},
	turbopack: {},
};

export default withContentlayer(nextConfig);
