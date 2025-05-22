import React from 'react';

export const CategoryFilter = ({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  onClearCategories,
}) => {
  const hasSelection = selectedCategoryIds.length > 0;

  return (
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className={`button is-success mr-6 ${hasSelection ? '' : 'is-outlined'}`}
        onClick={e => {
          e.preventDefault();
          onClearCategories();
        }}
      >
        All
      </a>

      {categories.map(category => (
        <a
          key={category.id}
          href="#/"
          data-cy="Category"
          className={`button mr-2 my-1 ${selectedCategoryIds.includes(category.id) ? 'is-info' : ''}`}
          onClick={e => {
            e.preventDefault();
            onToggleCategory(category.id);
          }}
        >
          {category.icon} {category.title}
        </a>
      ))}
    </div>
  );
};
