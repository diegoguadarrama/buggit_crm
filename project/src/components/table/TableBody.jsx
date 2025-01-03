import React from 'react';
import { flexRender } from '@tanstack/react-table';

export function TableBody({ rows }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {rows.map(row => (
        <tr key={row.id} className="hover:bg-gray-50">
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}