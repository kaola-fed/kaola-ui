import Button from '@kaola-ui/button'
import './button.play.less'

play( Button, module )
	.name( 'Button' )
	.add( 'basic', {
		template: `
			<div>
				<h3>形状</h3>
				<div>
					<Button>操作按钮</Button>
					<Button square>操作按钮</Button>
				</div>
			</div>
			<div>
				<h3>类型</h3>
				<div>
					<Button>操作按钮</Button>
					<Button type="primary">操作按钮</Button>
					<Button type="primary" outline>操作按钮</Button>
				</div>
			</div>
			<div>
				<h3>尺寸</h3>
				<div>
					<Button type="primary" size="xl">操作按钮</Button>
					<Button type="primary" size="lg">操作按钮</Button>
					<Button type="primary" size="md">操作按钮</Button>
					<Button type="primary" size="sm">操作按钮</Button>
					<Button type="primary" size="xs">操作按钮</Button>
				</div>
			</div>

			<div>
				<h3>行内元素</h3>
				<div>
					<Button type="primary" size="xl" inline>操作按钮</Button>
					<br />
					<Button type="primary" size="lg" inline>操作按钮</Button>
					<br />
					<Button type="primary" size="md" inline>操作按钮</Button>
					<br />
					<Button type="primary" size="sm" inline>操作按钮</Button>
					<br />
					<Button type="primary" size="xs" inline>操作按钮</Button>
					<br />
				</div>
			</div>
		`,
	} )
