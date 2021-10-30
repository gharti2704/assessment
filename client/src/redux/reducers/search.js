// import * as type from '../types';

// const initialState = {
//   posts: [],
//   loading: false,
//   error: null,
// };

// export default function search(state = initialState, action) {
//   switch (action.type) {
//     case type.SEARCH_TITLE_REQUESTED:
//       return {
//         ...state,
//         loading: true,
//       };

//     case type.SEARCH_TITLE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         posts: action.posts,
//       };

//     case type.SEARCH_TITLE_FAILED:
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       };

//     default:
//       return state;
//   }
// }
