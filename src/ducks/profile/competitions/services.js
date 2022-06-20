import {
  createCompetitionRequest,
  deleteCompetitionRequest,
  fetchCompetitionsRequest,
  updateCompetitionRequest,
} from '../../../tools/requests';

export const fetchCompetitions = () => {
  return new Promise((resolve, reject) => {
    fetchCompetitionsRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const createCompetition = ({
  name,
  sport,
  date,
  place,
  payment,
  supervisor,
}) => {
  return new Promise((resolve, reject) => {
    createCompetitionRequest(name, sport, date, place, payment, supervisor)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const updateCompetition = ({
  id,
  name,
  sport,
  date,
  place,
  payment,
  supervisor,
}) => {
  return new Promise((resolve, reject) => {
    updateCompetitionRequest(id, name, sport, date, place, payment, supervisor)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const deleteCompetition = ({ id }) => {
  return new Promise((resolve, reject) => {
    deleteCompetitionRequest(id)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
