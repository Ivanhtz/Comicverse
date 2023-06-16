import React, { Component } from 'react';
import ComicsBackForm from './comics-back-form/ComicsBackForm';
import ComicsBackList from './comics-back-list/ComicsBackList';

class ComicsBack extends Component {

	render(){
		return(
			<>
				<section>
					<header>
						<h1>
							Comics Back
						</h1>
					</header>
					<ComicsBackForm/>
					<ComicsBackList/>
				</section>
			</>
		)
	}
}

export default ComicsBack;