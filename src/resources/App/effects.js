/* @flow */

import fetch from 'isomorphic-fetch';

type FetchItems = (count: number) => number[];
export const fetchItems: FetchItems = count => fetch(`/api/test?count=${count}`)
  .then(response => {
    if (response.status > 400) {
      throw new Error('Error while fetching from the server.');
    }
    return response.json();
  })
  .then(body => body.items);
