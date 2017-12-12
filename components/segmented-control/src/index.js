import template from './index.html'

export default {
	template: template,
	config() {
		this.data.values = this.data.values || []
		this.data.selectedIndex = parseInt( this.data.selectedIndex ) || 0
	},
	onSelect( index ) {
		this.data.selectedIndex = index
		this.$emit( 'index-change', index )
		this.$emit( 'value-change', this.data.values[ index ] )
	},
}
