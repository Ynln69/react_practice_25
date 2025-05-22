import React from 'react';
import { UserFilter } from '../UserFilter';
import { SearchInput } from '../SearchInput';
import { CategoryFilter } from '../CategoryFilter';

export const Filters = ({
  users,
  selectedUserId,
  onSelectUser,
  searchQuery,
  onSearch,
  categories,
  selectedCategoryIds,
  onToggleCategory,
  onClearCategories,
  onReset,
}) => {
  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <UserFilter
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={onSelectUser}
        />

        <SearchInput query={searchQuery} onChange={onSearch} />

        <CategoryFilter
          categories={categories}
          selectedCategoryIds={selectedCategoryIds}
          onToggleCategory={onToggleCategory}
          onClearCategories={onClearCategories}
        />

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
            onClick={e => {
              e.preventDefault();
              onReset();
            }}
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
