import { GET_SKILLS, SET_CLIENT_SUMMARY, SET_DURATION_PACKAGE, ADD_SKILL, REMOVE_SKILL, SET_ADDRESS, SET_GENDER, SET_ACCESS_INSTRUCTIONS, SET_UNIFORM_DETAILS } from '../actions/types';

const initialState = {
  skills: [],
  clientSummary: '',
  durationPackage: null,
  skillsSelected: [],
  address: {
    line1: '',
    line2: '',
    line3: '',
  },
  gender: '',
  accessInstructions: '',
  uniformDetails: '',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_SKILLS:
      return { ...state, skills: action.skills };
    case SET_CLIENT_SUMMARY:
      return { ...state, clientSummary: action.clientSummary };
    case SET_DURATION_PACKAGE:
      return { ...state, durationPackage: action.durationPackage };
    case ADD_SKILL:
      return { ...state, skillsSelected: [...state.skillsSelected, action.skill] };
    case REMOVE_SKILL:
      const skillsSelected = state.skillsSelected.filter(skill => skill !== action.skill);
      return { ...state, skillsSelected };
    case SET_ADDRESS:
      const address = { ...state.address };
      address[action.line] = action.value;
      return { ...state, address };
    case SET_GENDER:
      return { ...state, gender: action.gender };
    case SET_ACCESS_INSTRUCTIONS:
      return { ...state, accessInstructions: action.accessInstructions };
    case SET_UNIFORM_DETAILS:
      return { ...state, uniformDetails: action.uniformDetails };
    default:
      return state;
  }
}
