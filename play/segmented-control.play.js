import SegmentedControl from '@kaola-ui/segmented-control'
import './segmented-control.play.less'

play( SegmentedControl, module )
	.name( 'SegmentedControl' )
	.add( 'basic', {
		template: `
			<div>
				<h3>基础</h3>
				<div>
					<SegmentedControl
						on-value-change="{ this.$log( $event ) }"
						values="{ [ '图文详情', '小考拉答疑' ] }"
					></SegmentedControl>
				</div>
			</div>
		`,
	} )
