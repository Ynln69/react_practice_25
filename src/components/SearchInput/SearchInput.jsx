import React from 'react';

export const SearchInput = ({ query, onChange }) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="panel-block">
      <p className="control has-icons-left has-icons-right">
        <input
          data-cy="SearchField"
          type="text"
          className="input"
          placeholder="Search"
          value={query}
          onChange={e => onChange(e.target.value)}
        />

        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>

        {query && (
          <span className="icon is-right">
            <button
              data-cy="ClearButton"
              type="button"
              className="delete"
              onClick={handleClear}
            />
          </span>
        )}
      </p>
    </div>
  );
};
