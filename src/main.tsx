import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

import "./assets/styles/fonts.scss"
import "./assets/styles/reset.scss"
import "./assets/fonts/abel.ttf"
import "./assets/fonts/cygre_bold.ttf"
import "./assets/fonts/cygre_book.ttf"
import "./assets/fonts/cygre_regular.ttf"
import "./assets/fonts/rubik.ttf"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
