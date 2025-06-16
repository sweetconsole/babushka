import { FC } from "react"
import { useParams, Navigate } from "react-router"
import { blogs } from "../components/Blog/blogs.data.ts"
import { Blog } from "../components/Blog"
import { BlogType } from "../components/Blog/blogs.types.ts"
import { pagesConfig } from "../config/pages.config.ts"

const BlogPage: FC = () => {
	const params = useParams()
	let blog: BlogType = blogs[0]

	const isBlog = () => {
		for (const article of blogs) {
			if (article.link == params.blogURL) {
				blog = article
				return true
			}
		}
		return false
	}

	return (
		<>
			{isBlog() ? (
					<Blog {...blog} />
			) : (
				<Navigate to={pagesConfig.error404} />
			)}
		</>
	)
}

export default BlogPage