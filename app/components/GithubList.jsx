import React from 'react';

export default class GithubList extends React.Component {
  renderList() {
    return this.props.repos.map((repo) => {
      return (
        <li
          key={repo.id}
          className="list-group-item">
          <a href={repo.html_url}>
            {repo.name}
          </a>
          </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}
