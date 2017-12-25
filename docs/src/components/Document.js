import Regular from 'regularjs'
import Header from './Header'
import Sidebar from './Sidebar'

export default Regular.extend( {
	template: `
		<div>
			<Header></Header>
			<div>
				<Sidebar></Sidebar>
				<div ref="default"></div>
			</div>
		</div>
	`,
	config() {

	},
	init() {
		this.__routerViews = {
			default: this.$refs.default
		}
	}
} ).component( {
	Header,
	Sidebar
} )
