/* @flow */

import fetch from 'isomorphic-fetch';

type JSON = {
  string: string | number | boolean | null,
};

type Response = {
  status: number,
  json: () => JSON,
};

type Body = {
  items: number[],
};

export default (count: number): number[] => fetch(`/api/test?count=${count}`)
  .then((response: Response) => {
    if (response.status > 400) {
      throw new Error('Error while fetching from the server.');
    }
    return response.json();
  })
  .then((body: Body) => body.items);
