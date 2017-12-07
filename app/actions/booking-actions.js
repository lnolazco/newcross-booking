import { GET_SKILLS, SET_CLIENT_SUMMARY, SET_DURATION_PACKAGE, ADD_SKILL, REMOVE_SKILL, SET_ADDRESS, SET_GENDER, SET_ACCESS_INSTRUCTIONS, SET_UNIFORM_DETAILS } from './types';

const skills = [
  'Registered Mental Health Nurses',
  'Learning Disability Nurse',
  'Paediatric Nurse',
];

function getSkills() {
  return (dispatch) => {
    dispatch({
      type: GET_SKILLS,
      skills,
    });
  };
}

function setClientSummary(clientSummary) {
  return (dispatch) => {
    dispatch({
      type: SET_CLIENT_SUMMARY,
      clientSummary,
    });
  };
}

function setAccessInstructions(accessInstructions) {
  return (dispatch) => {
    dispatch({
      type: SET_ACCESS_INSTRUCTIONS,
      accessInstructions,
    });
  };
}

function setDurationPackage(durationPackage) {
  return (dispatch) => {
    dispatch({
      type: SET_DURATION_PACKAGE,
      durationPackage,
    });
  };
}

function addSkill(skill) {
  return (dispatch) => {
    dispatch({
      type: ADD_SKILL,
      skill,
    });
  };
}

function removeSkill(skill) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SKILL,
      skill,
    });
  };
}

function setAddress(line, value) {
  return (dispatch) => {
    dispatch({
      type: SET_ADDRESS,
      line,
      value,
    });
  };
}

function setGender(gender) {
  return (dispatch) => {
    dispatch({
      type: SET_GENDER,
      gender,
    });
  };
}

function setUniformDetails(uniformDetails) {
  return (dispatch) => {
    dispatch({
      type: SET_UNIFORM_DETAILS,
      uniformDetails,
    });
  };
}

function createPackage() {
  return (dispatch, getState) => {
    console.log('create package', getState().booking);
  };
}

export {
  getSkills,
  setClientSummary,
  setDurationPackage,
  addSkill,
  removeSkill,
  setAddress,
  createPackage,
  setGender,
  setAccessInstructions,
  setUniformDetails,
};
