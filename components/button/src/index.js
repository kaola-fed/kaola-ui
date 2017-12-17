import classnames from 'classnames'
import template from './index.html'

export default {
	defaultName: 'ko-button',
	template: template,
	props: {
		type: String,
		inline: Boolean,
		outline: Boolean,
		square: Boolean,
		disabled: Boolean,
		size: String,
		primaryColor: String,
	},
	config() {
		this.data.size = isValidSizeType( this.data.size ) ? this.data.size : 'md'

		// whether use primary color
		const type = this.data.type || 'secondary'
		// modifiers
		const inline = !!this.data.inline
		const square = !!this.data.square
		const outline = !!this.data.outline
		const disabled = !!this.data.disabled
		const size = this.data.size
		const primaryColor = this.data.primaryColor
		const disabledColor = '#ccc'

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
			'is-disabled': disabled,
		} )

		// if type equals `primary`, and primaryColor is provided, use style to override
		if ( type === 'primary' && primaryColor ) {
			const key = `${ outline }_${ disabled }`
			let _style = {}

			switch ( key ) {
			case 'false_false': // primary
				_style = {
					backgroundColor: primaryColor,
					color: '#fff',
					border: `solid 1px ${ primaryColor }`,
				}
				break
			case 'false_true': // primary disabled
				_style = {
					backgroundColor: disabledColor,
					color: '#fff',
					border: `solid 1px ${ disabledColor }`,
				}
				break
			case 'true_false': // primary outline
				_style = {
					backgroundColor: '#fff',
					color: primaryColor,
					border: `solid 1px ${ primaryColor }`,
				}
				break
			case 'true_true': // primary outline disabled
				_style = {
					backgroundColor: '#fff',
					color: disabledColor,
					border: `solid 1px ${ disabledColor }`,
				}
				break
			}

			this.data._style = `
				border: ${ _style.border };
				color: ${ _style.color };
				background-color: ${ _style.backgroundColor };
			`
		}
	},
	onClick( e ) {
		// prefer native event (frameworkless)
		this.$emit( 'click', e.event )
	}
}

function isValidSizeType( sizeType ) {
	const VALID_SIZE_TYPE = [ 'xs', 'sm', 'md', 'lg', 'xl' ]
	return !!~VALID_SIZE_TYPE.indexOf( sizeType )
}
