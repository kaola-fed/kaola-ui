import createRouter from 'unfancy-router'
import Document from './components/Document'
import DocumentContent from './components/DocumentContent'

const router = createRouter()

const docs = router.create( {
	path: '/docs/',
	enter() {
		// use cached if possible
		if ( !this.__instance ) {
			this.__instance = new Document()
		}
		this.__instance.$inject( '#app' )
	},
	leave() {
		this.__instance.$inject( false )
	}
} )

const detail = router.create( {
	path: '/:name',
	enter() {
		const mountNode = this.parent.__instance.__routerViews.default
		// use cached if possible
		if ( !this.__instance ) {
			this.__instance = new DocumentContent()
		}
		this.__instance.$inject( mountNode )
	},
	leave() {
		const mountNode = this.parent.__instance.__routerViews.default
		this.__instance.$inject( false )
	},
	update( { params } ) {
		console.log( 'params', params )
		console.log( 'detail updated' )
	}
} )

docs.append( detail )

docs.start()
