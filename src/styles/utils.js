import { css } from 'styled-components'

export const sizes = {
	desktop: 992,
	small: 811,
	tablet: 768,
	hideTitle:599,
	phone: 414
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {})
