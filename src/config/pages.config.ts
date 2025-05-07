
const baseURL = "/babushka/dist/"

class PageConfig {
	home = baseURL
	projects = baseURL + "projects/"
	blogs = baseURL + "blogs/"
	faq = baseURL + "faq/"
	processing_personal_data = baseURL + "processing_of_personal_data/"
	error404 = baseURL + "404/"
}

export const pageConfig = new PageConfig()