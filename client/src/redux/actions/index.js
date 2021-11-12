import * as type from '../types';

export function getPosts() {
  return {
    type: type.GET_POSTS_REQUESTED,
  };
}

// export default function searchByTitle(searchTerm) {
//   return {
//     type: type.SEARCH_POSTS_REQUESTED,
//     payload: { searchTerm },
//   };
// }
