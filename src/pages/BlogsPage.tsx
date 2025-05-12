import { FC } from "react"
import { Cases, FAQ, Feedback, Footer } from "../components"

const BlogsPage: FC = () => {
	return (
		<>
      <main>
				<Cases />
				<Feedback />
				<FAQ />
      </main>

			<Footer />
		</>
	)
}

export default BlogsPage