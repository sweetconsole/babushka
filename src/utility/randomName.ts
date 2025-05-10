import { names } from "../config/names.config.ts"

export const randomName = () => {
	return names[Math.floor(Math.random()*names.length)]
}