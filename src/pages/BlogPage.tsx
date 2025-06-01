import { FC } from "react"
import { useParams, Navigate } from "react-router"
import { blogs } from "../components/Blog/blogs.data.ts"
import { Blog } from "../components/Blog"
import { BlogType } from "../components/Blog/blogs.types.ts"
import { pageConfig } from "../config/pages.config.ts"

const BlogPage: FC = () => {
	const params = useParams()
	let blog: BlogType = blogs[0]

	const isBlog = () => {
		for (const item of blogs) {
			if (item.link == params.blogURL) {
				blog = item
				return true
			}
		}
		return false
	}

	return (
		<>
			{isBlog() ? (
					<Blog title={blog.title} image={blog.image} description={blog?.description} date={blog?.date} result={blog?.result} items={blog?.items} />
			) : (
				<Navigate to={pageConfig.error404} />
			)}
		</>
	)
}

export default BlogPage