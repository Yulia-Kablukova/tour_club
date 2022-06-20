import { RoutesPointsComponent } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { selectRoutesPoints } from '../../../ducks/profile/routesPoints/selectors';
import {
  createRoutesPointRequest,
  deleteRoutesPointRequest,
  fetchRoutesPointsRequest,
  updateRoutesPointRequest,
} from '../../../ducks/profile/routesPoints';

export function RoutesPointsContainer() {
  const dispatch = useDispatch();
  const routesPoints = useSelector(selectRoutesPoints);
  const routesPointsPatch = [
    {
      id: 1,
      name: 'point 1',
    },
    {
      id: 2,
      name: 'point 2',
    },
    {
      id: 3,
      name: 'point 3',
    },
  ];

  React.useEffect(() => {
    dispatch(fetchRoutesPointsRequest());
  }, [dispatch]);

  const submitCreate = (routesPointsInfo) => {
    dispatch(createRoutesPointRequest(routesPointsInfo));
  };

  const submitUpdate = (routesPointsInfo) => {
    dispatch(updateRoutesPointRequest(routesPointsInfo));
  };

  const submitDelete = (id) => {
    dispatch(deleteRoutesPointRequest({ id }));
  };

  return (
    <RoutesPointsComponent
      routesPoints={routesPoints}
      submitCreate={submitCreate}
      submitUpdate={submitUpdate}
      submitDelete={submitDelete}
    />
  );
}
