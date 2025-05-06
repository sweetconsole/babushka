import {FC} from "react"
import {Link} from "react-scroll"
import {IScrollLinkProps} from "./scrollLink.interface.ts";

const ScrollLink: FC<IScrollLinkProps> = ({link, children, text, style}) => {
	return (
		<Link className={style} to={link} smooth={true} duration={1000}>
			{children}{text}
		</Link>
	)
}

export default ScrollLink