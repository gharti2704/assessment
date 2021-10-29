import * as type from '../types';

export function getPosts(posts) {
  return {
    type: type.GET_POSTS_REQUESTED,
    payload: posts,
  };
}

export function searchByTitle(title) {
  return {
    type: type.SEARCH_TITLE_REQUESTED,
    payload: title,
  };
}
