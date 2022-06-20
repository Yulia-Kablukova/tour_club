import {
  createGroupRequest,
  deleteGroupRequest,
  fetchCoachesRequest,
  fetchGroupsRequest,
  fetchSportsRequest,
  fetchSportsWithoutSectionRequest,
  updateGroupRequest,
} from '../../../tools/requests';

export const fetchGroups = () => {
  return new Promise((resolve, reject) => {
    fetchGroupsRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const createGroup = ({ number, name, sport, coach, timetable }) => {
  return new Promise((resolve, reject) => {
    createGroupRequest(number, name, sport, coach, timetable)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const updateGroup = ({ id, number, name, sport, coach, timetable }) => {
  return new Promise((resolve, reject) => {
    updateGroupRequest(id, number, name, sport, coach, timetable)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const deleteGroup = ({ id }) => {
  return new Promise((resolve, reject) => {
    deleteGroupRequest(id)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const fetchCoaches = () => {
  return new Promise((resolve, reject) => {
    fetchCoachesRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const fetchSports = () => {
  return new Promise((resolve, reject) => {
    fetchSportsRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const fetchSportsWithoutSection = () => {
  return new Promise((resolve, reject) => {
    fetchSportsWithoutSectionRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
