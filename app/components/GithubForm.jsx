import React from 'react';

export default class GithubForm extends React.Component {
	onFormSubmit(e) {
		e.preventDefault();

		var username = this.refs.username.value;

		if (username.length > 0) {
			this.refs.username.value = '';
			this.props.onSearch(username);
		}
	}

    render() {
        return (
        	<div>
        		<form onSubmit={this.onFormSubmit.bind(this)}>
        			<input type="search" placeholder="Enter Github Username" ref="username"></input>
        			<button className="expanded button hollow">Get Repos</button>
        		</form>
        	</div>
        )
    }
}
