

export const AppearanceItem = {
	visible: {
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 10,
			ease: "easeInOut",
		}
	}
}

export const AppearanceContainer = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.6,
			staggerChildren: 0.4
		},
	},
}