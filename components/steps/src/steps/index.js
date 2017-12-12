import template from './index.html'
import StepCircle from '../step-circle'

export default {
	components: {
		StepCircle,
	},
	template,
	config() {
		const current = this.data.current || 0
		const status = this.data.status = this.data.status || 'process'
		const steps = this.data._steps = []

		this.$on( '_step_add', function ( target ) {
			steps.push( target )

			steps.forEach( ( step, i ) => {
				if ( i < current ) {
					step.data.status = 'done'
				} else if ( current === i ) {
					step.data.status = status
				} else {
					step.data.status = 'pending'
				}

				if ( i < current ) {
					step.data.lineStatus = [
						true, true
					]
				} else if ( i === current ) {
					step.data.lineStatus = [
						true, false
					]
				} else {
					step.data.lineStatus = [
						false, false
					]
				}

				if ( isFloat( current ) ) {
					// 向下取整，找到过渡状态持有的节点
					const index = parseInt( current )
					const transitionStatusHolder = steps[ index ]

					if ( transitionStatusHolder ) {
						transitionStatusHolder.data.isTransitionHolder = true
					}
				}
			} )
		} )

		this.$on( '_step_remove', function ( target ) {
			const index = steps.indexOf( target )
			steps.splice( index, 1 )
			this.$update()
		} )
	},
}

function isFloat( num ) {
	num = Number( num )
	return parseInt( num ) !== num
}
