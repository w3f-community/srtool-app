import React, { Component } from 'react'
import { Alert } from '@material-ui/lab'

export class Intro extends Component {
	render(): React.ReactNode {
		return (
			<Alert severity="success" color="success">
				This App is a GUI wrapper for <b>srtool</b>. You can learn more about
				srtool{' '}
				<a href="https://gitlab.com/chevdor/srtool" target="_blank">
					here
				</a>
				. srtool helped you build and verify the runtime of a Substratre based
				chain. Building such a runtime takes a fair amount of time and your
				computer will be rather busy during this process. Depending on your
				machine, it can take up to 1 hour or more. Patience is required! You
				will need a few tools on your machine.
			</Alert>
		)
	}
}
