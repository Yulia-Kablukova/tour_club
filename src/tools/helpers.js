export const saveState = (token) => {
  localStorage.setItem('authToken', token);
};

export const loadState = () => {
  return (
    localStorage.hasOwnProperty('authToken') &&
    localStorage.getItem('authToken') !== ''
  );
};
