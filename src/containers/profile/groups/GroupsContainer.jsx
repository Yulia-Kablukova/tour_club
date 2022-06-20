import { GroupsComponent } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
  createGroupRequest,
  deleteGroupRequest,
  fetchCoachesRequest,
  fetchGroupsRequest,
  fetchSportsRequest,
  fetchSportsWithoutSectionRequest,
  updateGroupRequest,
} from '../../../ducks/profile/groups';
import React from 'react';
import {
  selectCoaches,
  selectGroups,
  selectSports,
  selectSportsSelect,
} from '../../../ducks/profile/groups/selectors';

export function GroupsContainer({ users }) {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const coaches = useSelector(selectCoaches);
  const sports = useSelector(selectSports);
  const sportsSelect = useSelector(selectSportsSelect);

  React.useEffect(() => {
    dispatch(fetchGroupsRequest());
    dispatch(fetchCoachesRequest());
    dispatch(fetchSportsRequest());
  }, [dispatch]);

  const coachesPatch = [
    { id: 1, name: 'fef', surname: 'dmklw', patronymic: 'kdwkq' },
    { id: 2, name: 'esf', surname: 'dmklw', patronymic: 'kdwkq' },
    { id: 3, name: 'fwqwfef', surname: 'dmklw', patronymic: 'kdwkq' },
  ];

  const sportsPatch = [
    { id: 1, name: 'beg' },
    { id: 2, name: 'eto' },
    { id: 3, name: 'dar' },
  ];

  const groupsPatch = [
    {
      id: 1,
      number: '19204',
      name: 'test',
      sport: 3,
      coach: 1,
      timetable: 'пн, ср, пт в 9:00',
    },
    {
      id: 2,
      number: '19205',
      name: 'test',
      sport: 2,
      coach: 2,
      timetable: 'пн, ср, пт в 9:00',
    },
    {
      id: 3,
      number: '19204',
      name: 'test',
      sport: 1,
      coach: 3,
      timetable: 'пн, ср, пт в 9:00',
    },
  ];

  const submitCreate = (groupInfo) => {
    dispatch(createGroupRequest(groupInfo));
  };

  const submitUpdate = (groupInfo) => {
    dispatch(updateGroupRequest(groupInfo));
  };

  const submitDelete = (id) => {
    dispatch(deleteGroupRequest({ id }));
  };

  const submitFetchSportsWithoutSection = () => {
    dispatch(fetchSportsWithoutSectionRequest());
  };

  return (
    <GroupsComponent
      users={users}
      groups={groups}
      coaches={coaches}
      sports={sports}
      sportsSelect={sportsSelect}
      submitCreate={submitCreate}
      submitUpdate={submitUpdate}
      submitDelete={submitDelete}
      submitFetchSportsWithoutSection={submitFetchSportsWithoutSection}
    />
  );
}
