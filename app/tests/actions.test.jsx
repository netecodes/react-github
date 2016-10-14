import * as actions from 'actions';
import expect from 'expect';

describe('Actions', () => {
    it('creates FETCH_SUCCESS after fetching has succeded', () => {
      const mockData = ['some repo', 'some other repo'];
      const expectedData = {
        		type: 'FETCH_SUCCESS'
      }

      var response = actions.successHandler(mockData);
      expect(response.type).toEqual(expectedData.type);

  })

    it('creates FETCH_ERROR after fetching has failed', () => {
      const mockData = ['some repo', 'some other repo'];
      const expectedData = {
            type: 'FETCH_ERROR'
      }

      var response = actions.errorHandler(mockData);
      expect(response.type).toEqual(expectedData.type);

})





})
