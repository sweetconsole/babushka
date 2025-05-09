
const baseURL = "/babushka/dist/"

class PageConfig {
	home = baseURL
	projects = baseURL + "projects/"
	blog = baseURL + "blog/"
	faq = baseURL + "faq/"
	processing_personal_data = baseURL + "processing_of_personal_data/"
	thanks = baseURL + "thanks/"
	error404 = baseURL + "404/"
}

export const pageConfig = new PageConfig()