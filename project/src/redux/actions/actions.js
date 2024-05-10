import * as actions from '../constants/actionTypes'

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description
  },
});

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id
  },
});