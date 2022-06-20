import {
  createRoutesPointRequest,
  deleteRoutesPointRequest,
  fetchRoutesPointsRequest,
  fetchRoutesRequest,
  updateRoutesPointRequest,
} from '../../../tools/requests';

export const fetchRoutesPoints = () => {
  return new Promise((resolve, reject) => {
    fetchRoutesPointsRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const createRoutesPoint = ({ name }) => {
  return new Promise((resolve, reject) => {
    createRoutesPointRequest(name)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const updateRoutesPoint = ({ id, name }) => {
  return new Promise((resolve, reject) => {
    updateRoutesPointRequest(id, name)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const deleteRoutesPoint = ({ id }) => {
  return new Promise((resolve, reject) => {
    deleteRoutesPointRequest(id)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const fetchRoutes = () => {
  return new Promise((resolve, reject) => {
    fetchRoutesRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
