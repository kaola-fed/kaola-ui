import Button from '@kaola-ui/button'
import './button.play.less'

play( Button, module )
	.name( 'Button' )
	.add( 'basic', {
		template: `
			<div>
				<h3>形状</h3>
				<div>
					<Button>normal</Button>
					<Button square>square</Button>
				</div>
			</div>
			<div>
				<h3>类型</h3>
				<div>
					<Button primaryColor="blue">normal</Button>
					<Button type="primary" primaryColor="blue">primary</Button>
					<Button type="primary" outline primaryColor="blue">primary outline</Button>
				</div>
			</div>
			<div>
				<h3>尺寸</h3>
				<div>
					<Button size="xl">xl</Button>
					<Button size="lg">lg</Button>
					<Button size="md">md</Button>
					<Button size="sm">sm</Button>
					<Button size="xs">xs</Button>
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

			<div>
				<h3>禁用</h3>
				<div>
					<Button disabled>normal</Button>
					<Button type="primary" disabled>primary</Button>
					<Button type="primary" outline disabled>primary outline</Button>
				</div>
			</div>
		`,
	} )
