import React from 'react';
import { flexRender } from '@tanstack/react-table';

export function TableHeader({ headerGroups }) {
  return (
    <thead className="bg-gray-50">
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <th
              key={header.id}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              onClick={header.column.getToggleSortingHandler()}
            >
              {flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}