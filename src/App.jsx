/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import { Filters } from './components/Filters';
import { ProductTable } from './components/ProductTable';

export const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const toggleCategory = id => {
    if (selectedCategoryIds.includes(id)) {
      setSelectedCategoryIds(selectedCategoryIds.filter(c => c !== id));
    } else {
      setSelectedCategoryIds([...selectedCategoryIds, id]);
    }
  };

  const resetFilters = () => {
    setSelectedUserId(null);
    setSearchQuery('');
    setSelectedCategoryIds([]);
  };

  // Add related category and owner to each product
  const enrichedProducts = productsFromServer.map(product => {
    const category = categoriesFromServer.find(
      c => c.id === product.categoryId,
    );
    const owner = usersFromServer.find(u => u.id === category?.ownerId);

    return { ...product, category, owner };
  });

  // Filter products by selected user, search query, and selected categories
  let filteredProducts = enrichedProducts
    .filter(
      product =>
        selectedUserId === null || product.owner?.id === selectedUserId,
    )
    .filter(
      product =>
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter(
      product =>
        selectedCategoryIds.length === 0 ||
        selectedCategoryIds.includes(product.category?.id),
    );

  if (sortConfig.key) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;

      return 0;
    });
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <Filters
          users={usersFromServer}
          selectedUserId={selectedUserId}
          onSelectUser={setSelectedUserId}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          categories={categoriesFromServer}
          selectedCategoryIds={selectedCategoryIds}
          onToggleCategory={toggleCategory}
          onClearCategories={() => setSelectedCategoryIds([])}
          onReset={resetFilters}
        />

        <ProductTable
          products={filteredProducts}
          sortConfig={sortConfig}
          onSort={setSortConfig}
        />
      </div>
    </div>
  );
};
