import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RepoList extends React.Component {
  renderList() {
    const { data, fetched, error } = this.props.repos;
    if(error) {
      return (
        <li className="expanded button hollow">
          {error}
        </li>
      )
    } else if (fetched === true && data.length === 0) {
      return (
        <li className="expanded button hollow">
          User has no Repos
        </li>
      )
    } else if (data) {
      return data.map((repo) => {
        return (
          <li
            key={repo.id}
            className="expanded button hollow">
            <a href={repo.html_url}>
              {repo.name}
            </a>
          </li>
        )
      })
    }
  }

  render() {
    return (
      <div className="text-center">
        <ul className="no-bullet">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      repos: state.repos,
    }
  }
)(RepoList);
