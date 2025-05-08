
export const SlideLeft = (delay: number) => {
	return {
		initial: {
			x: 50,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: delay
			},
		}
	}
}

export const SlideUp = (delay: number) => {
	return {
		initial: {
			y: 100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: delay
			},
		}
	}
}

export const SlideBottom = (delay: number) => {
	return {
		initial: {
			y: -50,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: delay
			}
		}
	}
}