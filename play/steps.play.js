import Steps from '@kaola-ui/steps'
import StepCircle from '@kaola-ui/steps/src/step-circle'
import './steps.play.less'

const Step = Steps.Step

play( Steps, module )
	.name( 'Steps' )
	.component( 'Step', Step )
	.component( 'StepCircle', StepCircle )
	.add( 'step circle', {
		template: `
			<StepCircle>9</StepCircle>
		`,
	} )
	.add( 'step circle outline', {
		template: `
			<StepCircle outline>9</StepCircle>
		`,
	} )
	.add( 'step circle icon', {
		template: `
			<StepCircle icon="down" outline>9</StepCircle>
		`,
	} )
	.add( 'steps', {
		template: `
			<Steps current="{ 1 }" status="error">
				<Step title="标题1" description="描述1"></Step>
				<Step title="标题2" description="描述2"></Step>
				<Step title="标题3" description="描述3"></Step>
			</Steps>

			<br>

			<Steps current="{ 1 }" status="done">
				<Step title="标题1" description="描述1"></Step>
				<Step title="标题2" description="描述2"></Step>
				<Step title="标题3" description="描述3"></Step>
			</Steps>

			<br>

			<Steps current="{ 2 }" status="done">
				<Step title="标题1" description="描述1"></Step>
				<Step title="标题2" description="描述2"></Step>
				<Step title="标题3" description="描述3"></Step>
			</Steps>

			<br>

			<Steps current="{ 1 }">
				<Step title="标题1" description="描述1"></Step>
				<Step title="标题2" description="描述2"></Step>
				<Step title="标题3" description="描述3"></Step>
			</Steps>

			<br>

			<Steps current="{ 2 }">
				<Step title="标题1" description="描述1"></Step>
				<Step title="标题2" description="描述2"></Step>
				<Step title="标题3" description="描述3"></Step>
			</Steps>

			<br>

			<Steps current="{ 1.5 }" transition-text="退款中">
				<Step title="标题1" description="描述1"></Step>
				<Step title="标题2" description="描述2"></Step>
				<Step title="标题3" description="描述3"></Step>
			</Steps>

			<br>
		`,
	} )
