import React, { useEffect, useState } from 'react';
import { useCustomerTable } from '../hooks/useCustomerTable';
import { TableHeader } from './table/TableHeader';
import { TableBody } from './table/TableBody';

export function CustomerTable() {
  const { customers, table } = useCustomerTable();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <TableBody rows={table.getRowModel().rows} />
      </table>
    </div>
  );
}