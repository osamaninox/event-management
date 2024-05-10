// import * as actions from "../constants/actionTypes";
// let lastId = 0;

// export default function eventReducer(state = [], action) {
//   switch (action.type) {
//     case actions.BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case actions.BUG_RESOLVED:
//       return [
//         ...state,
//         {
//           // id: id,
//           description: action.payload.id,
//           resolved: true,
//         },
//       ];
//     default:
//       return [...state];
//   }
// }
