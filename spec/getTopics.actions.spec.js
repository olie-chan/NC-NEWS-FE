import {expect} from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import getTopics, {
  getTopicsFailure, getTopicsRequest, getTopicsSuccess
} from '../src/actions/getTopics';

import {API_URL} from '../config';

const mockStore = configureMockStore([thunk]);

describe.only('getTopics', () => {
  it('dispatches GET_TOPICS_SUCCESS when getting topics responds with 200 and data', () => {
    nock(API_URL)
      .get('/topics')
      .reply(200, {topics: [1, 2, 3]});
    
    const expectedActions = [
      getTopicsRequest(),
      getTopicsSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(getTopics())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});