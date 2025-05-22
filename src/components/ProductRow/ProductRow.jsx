import React from 'react';

export const ProductRow = ({ product }) => {
  const { id, name, category, owner } = product;

  const userClass = owner?.sex === 'f' ? 'has-text-danger' : 'has-text-link';

  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {id}
      </td>

      <td data-cy="ProductName">{name}</td>

      <td data-cy="ProductCategory">
        {category?.icon} - {category?.title}
      </td>

      <td data-cy="ProductUser" className={userClass}>
        {owner?.name}
      </td>
    </tr>
  );
};
