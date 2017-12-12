import classnames from 'classnames'
import template from './index.html'

export default {
	defaultName: 'ko-button',
	template: template,
	config() {
		this.data.size = isValidSizeType( this.data.size ) ? this.data.size : 'md'

		// whether use primary color
		const type = this.data.type
		// modifiers
		const inline = this.data.inline
		const square = this.data.square
		const outline = this.data.outline
		const size = this.data.size

		this.data._class = classnames( {
			'is-inline': inline,
			'is-square': square,
			'is-outline': outline,
			'is-size-xs': size === 'xs',
			'is-size-sm': size === 'sm',
			'is-size-md': size === 'md',
			'is-size-lg': size === 'lg',
			'is-size-xl': size === 'xl',
			'is-primary': type === 'primary',
			'is-secondary': type !== 'primary',
		} )
	},
	init() {

	}
}

function isValidSizeType( sizeType ) {
	const VALID_SIZE_TYPE = [ 'xs', 'sm', 'md', 'lg', 'xl' ]
	return !!~VALID_SIZE_TYPE.indexOf( sizeType )
}
