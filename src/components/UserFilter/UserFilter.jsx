import React from 'react';

export const UserFilter = ({ users, selectedUserId, onSelectUser }) => {
  return (
    <p className="panel-tabs has-text-weight-bold">
      <a
        href="#/"
        data-cy="FilterAllUsers"
        className={selectedUserId === null ? 'is-active' : ''}
        onClick={e => {
          e.preventDefault();
          onSelectUser(null);
        }}
      >
        All
      </a>

      {users.map(user => (
        <a
          key={user.id}
          href="#/"
          data-cy="FilterUser"
          className={selectedUserId === user.id ? 'is-active' : ''}
          onClick={e => {
            e.preventDefault();
            onSelectUser(user.id);
          }}
        >
          {user.name}
        </a>
      ))}
    </p>
  );
};
