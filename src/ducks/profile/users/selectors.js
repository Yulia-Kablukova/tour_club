export const selectUsers = (state) => {
  return state.users.users;
};

export const selectUsersStatus = (state) => {
  return state.users.status;
};

export const selectUsersSelect = (state) => {
  return state.users.usersSelect;
};
