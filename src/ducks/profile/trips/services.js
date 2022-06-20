import {
  createTripRequest,
  deleteTripRequest,
  fetchTripsRequest,
  updateTripRequest,
} from '../../../tools/requests';

export const fetchTrips = () => {
  return new Promise((resolve, reject) => {
    fetchTripsRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const createTrip = ({
  name,
  date,
  category,
  routeId,
  daysCount,
  difficulty,
  maxParticipants,
  type,
  physicalLevel,
  gid,
}) => {
  return new Promise((resolve, reject) => {
    createTripRequest(
      name,
      date,
      category,
      routeId,
      daysCount,
      difficulty,
      maxParticipants,
      type,
      physicalLevel,
      gid
    )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const updateTrip = ({
  id,
  name,
  date,
  category,
  routeId,
  daysCount,
  difficulty,
  maxParticipants,
  type,
  physicalLevel,
  gid,
}) => {
  return new Promise((resolve, reject) => {
    updateTripRequest(
      id,
      name,
      date,
      category,
      routeId,
      daysCount,
      difficulty,
      maxParticipants,
      type,
      physicalLevel,
      gid
    )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const deleteTrip = ({ id }) => {
  return new Promise((resolve, reject) => {
    deleteTripRequest(id)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
