import React, { useState } from 'react';
import Select from './Select';
import ListGroup from 'components/list-group/ListGroup';

const USERS_OPTIONS = [
  { value: "name", name: "За іменем" },
  { value: "username", name: "За ніком" },
  { value: "email", name: "За емейлом" },
];

const INITIAL_STATE_USERS = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  }
];

const UsageExampleSimpleSelect = () => {

  const [users, setUsers] = useState(INITIAL_STATE_USERS);
  const [selectedSortUsers, setSelectedSortUsers] = useState('');

  const sortUsers = (sort) => {
    setSelectedSortUsers(sort);
    setUsers([...users].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <>
      <Select
        id="users"
        options={USERS_OPTIONS}
        defaultOption={"Метод сортування"}
        label={"Сортування користувачів"}
        value={selectedSortUsers}
        onChange={sortUsers}
      />

      <ListGroup
        items={users}
        keyExtractor={user => `users-list-item_${user.id}`}
        renderItem={user => (
          <div>
            <p><b>Name: </b>{user.name}</p>
            <p><b>Username: </b>{user.username}</p>
            <p><b>Email: </b>{user.email}</p>
          </div>
        )}
      />
    </>
  );
}

export default UsageExampleSimpleSelect;
