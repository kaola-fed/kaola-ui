import template from './index.html'

export default {
	template,
	init() {
		if ( this.$outer ) {
			this.$outer.$emit( '_step_add', this )
		}

		this.$on( '$destroy', () => {
			this.$outer.$emit( '_step_remove', this )
		} )
	},
}
