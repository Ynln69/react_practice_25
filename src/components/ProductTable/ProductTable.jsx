import React from 'react';
import { ProductRow } from '../ProductRow';
import { SortableHeader } from '../SortableHeader';

export const ProductTable = ({ products, sortConfig, onSort }) => {
  return (
    <div className="box table-container">
      {products.length === 0 ? (
        <p data-cy="NoMatchingMessage">
          No products matching selected criteria
        </p>
      ) : (
        <table
          data-cy="ProductTable"
          className="table is-striped is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <SortableHeader
                title="ID"
                columnKey="id"
                sortConfig={sortConfig}
                onSort={onSort}
              />
              <SortableHeader
                title="Product"
                columnKey="name"
                sortConfig={sortConfig}
                onSort={onSort}
              />
              <SortableHeader
                title="Category"
                columnKey="categoryId"
                sortConfig={sortConfig}
                onSort={onSort}
              />
              <SortableHeader
                title="User"
                columnKey="ownerId"
                sortConfig={sortConfig}
                onSort={onSort}
              />
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
