import React from 'react';

export const SortableHeader = ({ title, columnKey, sortConfig, onSort }) => {
  const getIcon = () => {
    if (sortConfig.key !== columnKey) {
      return 'fa-sort';
    }

    return sortConfig.direction === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
  };

  const handleClick = e => {
    e.preventDefault();

    onSort(prev => {
      if (prev.key !== columnKey) {
        return { key: columnKey, direction: 'asc' };
      }

      if (prev.direction === 'asc') {
        return { key: columnKey, direction: 'desc' };
      }

      return { key: null, direction: null };
    });
  };

  return (
    <th>
      <span className="is-flex is-flex-wrap-nowrap">
        {title}
        <a href="#/" onClick={handleClick}>
          <span className="icon">
            <i data-cy="SortIcon" className={`fas ${getIcon()}`} />
          </span>
        </a>
      </span>
    </th>
  );
};
