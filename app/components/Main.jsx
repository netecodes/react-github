import React from 'react';

import GithubForm from '../containers/GithubForm';
import RepoList from './RepoList'

export default class Github extends React.Component {
  render() {
  return (
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        <h1 className="text-center">Get Repos</h1>
        <GithubForm />
        <RepoList />
      </div>
    </div>
    )
  }
}
