
const baseURL = "/"

class PageConfig {
	home = baseURL
	projects = baseURL + "projects/"
	project = baseURL + "project/:projectId"
	blogs = baseURL + "blog/"
	blog = baseURL + "blog/:blogURL/"
	faq = baseURL + "faq/"
	processing_personal_data = baseURL + "processing_of_personal_data/"
	thanks = baseURL + "thanks/"
	error404 = baseURL + "404/"
}

export const pageConfig = new PageConfig()