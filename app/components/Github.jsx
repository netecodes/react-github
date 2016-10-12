import React from 'react';

import GithubList from './GithubList'
import GithubForm from './GithubForm'
import getRepos from '../api/GithubAPI'

export default class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      repos: undefined
    }
  }

  handleSearch(username) {
    var that = this;

    getRepos(username).then(function(repos) {
      that.setState({
        username: username,
        repos: repos
      });
    }, function (e) {
        //handles error
      });
  }


  render() {
    const {username, repos} = this.state

    function renderList() {
      if (username && repos)
      return <GithubList username={username} repos={repos} />
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Repos</h1>
        <GithubForm onSearch={this.handleSearch.bind(this)} />
        {renderList()}
      </div>
    )
  }
}
