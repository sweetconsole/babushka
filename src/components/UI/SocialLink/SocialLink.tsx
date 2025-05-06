import {FC, JSX} from "react"

interface IProps {
  link: string
  label: string
	icon: JSX.Element
	style: string
}

const SocialLink:FC <IProps> = ({link, label, icon, style}) => {
	return (
    <a className={style}
       href={link}
       target="_blank"
       aria-label={label}
       rel="noreferrer">
			{icon}
    </a>
	)
}

export default SocialLink