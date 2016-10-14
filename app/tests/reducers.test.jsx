import reducer from 'reducer';
import expect from 'expect';

describe('Reducer', () => {
  it('should return the initial empty state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle FETCH_SUCCESS', () => {
    expect(
      reducer([], {
        type: 'FETCH_SUCCESS',
        payload: {data: 'some repo'},
        fetched: true
      })
    ).toEqual(
        {
          data: 'some repo',
          fetched: true
        }
    )
  })

  it('should handle FETCH_ERROR', () => {
    expect(
      reducer([], {
        type: 'FETCH_ERROR',
        payload: {data: 'some repo'},
        fetched: true,
        error: 'User Not Found'
      })
    ).toEqual(
        {
          data: 'some repo',
          error: 'User Not Found'
        }
    )
  })

})
