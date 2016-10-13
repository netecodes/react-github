import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepos } from '../actions/index';

class GithubForm extends React.Component {
  constructor(props) {
    super (props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchRepos(this.state.term);
    this.setState({ term: '' });

	}

    render() {
        return (
        	<div>
        		<form onSubmit={this.onFormSubmit}>
        			<input type="search" placeholder="Enter Github Username" value={this.state.term} onChange={this.onInputChange}></input>
        			<button className="expanded button">Get Repos</button>
        		</form>
        	</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepos }, dispatch);
}

export default connect(null, mapDispatchToProps)(GithubForm);
