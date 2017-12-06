import { GET_SKILLS, SET_CLIENT_SUMMARY, SET_DURATION_PACKAGE } from '../actions/types';

const initialState = {
  skills: [],
  clientSummary: '',
  startDate: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_SKILLS:
      return { ...state, skills: action.skills };
    case SET_CLIENT_SUMMARY:
      return { ...state, clientSummary: action.clientSummary };
    case SET_DURATION_PACKAGE:
      return { ...state, durationPackage: action.durationPackage };
    default:
      return state;
  }
}
