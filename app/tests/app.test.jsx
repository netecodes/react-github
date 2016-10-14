var expect = require('expect');

var RepoList = require('../components/RepoList');

describe('App', () => {
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });
});

describe('RepoList', () => {
  it('should exist', () => {
    expect(RepoList).toExist();
  });
});
