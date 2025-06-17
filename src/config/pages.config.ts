
const baseURL = "/babushka/dist/"

class PagesConfig {
	home = baseURL
	cases = baseURL + "cases/"
	case = baseURL + "case/:caseURL/"
	blogs = baseURL + "blogs/"
	blog = baseURL + "blog/:blogURL/"
	faq = baseURL + "faq/"
	processing_personal_data = baseURL + "processing_of_personal_data/"
	thanks = baseURL + "thanks/"
	error404 = baseURL + "404/"
}

export const pagesConfig = new PagesConfig()