export const selectGroups = (state) => {
  return state.groups.groups;
};

export const selectGroupsStatus = (state) => {
  return state.groups.status;
};

export const selectCoaches = (state) => {
  return state.groups.coaches;
};

export const selectSports = (state) => {
  return state.groups.sports;
};

export const selectSportsSelect = (state) => {
  return state.groups.sportsSelect;
};
