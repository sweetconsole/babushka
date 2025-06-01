import { FC } from "react"
import { FAQ, Feedback, Footer } from "../components"
import { Blogs, BlogsKeywords, BlogIntro } from "../components/Blog"

const BlogsPage: FC = () => {
	return (
		<>
			<main>
				<BlogIntro />
				<BlogsKeywords />
				<Blogs />
			</main>

			<Feedback />
			<FAQ />
			<Footer />
		</>
	)
}

export default BlogsPage