import { GET_SKILLS, SET_CLIENT_SUMMARY, SET_DURATION_PACKAGE } from './types';

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

function setDurationPackage(durationPackage) {
  return (dispatch) => {
    dispatch({
      type: SET_DURATION_PACKAGE,
      durationPackage,
    });
  };
}

export { getSkills, setClientSummary, setDurationPackage };
