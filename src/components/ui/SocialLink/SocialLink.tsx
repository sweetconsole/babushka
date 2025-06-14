import { FC, JSX } from "react"

interface IProps {
  link: string
  label: string
	style: string
	icon?: JSX.Element
	children?: JSX.Element
}

const SocialLink:FC <IProps> = ({link, label, icon, style, children}) => {
	return (
    <a className={style}
       href={link}
       target="_blank"
       aria-label={label}
       rel="noreferrer">
			{icon}{children}
    </a>
	)
}

export default SocialLink